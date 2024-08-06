import json
from pathlib import Path
from eamodelset.parser.model import ParsedModel, ArchimateElement, ArchimateRelationship, ArchimateView
from eamodelset.common.utils import log, log_warning, log_error
from eamodelset.parser.utils import ELEMENT_TYPES, relationship_types, ParserUtils

class SAPSAMParser:

    @staticmethod
    def parse_sap_sam_model(file_path: Path) -> ParsedModel | None:
        try:
            with open(file_path, 'r') as file:
                data = json.load(file)
        except json.JSONDecodeError:
            log_error(f"Failed to parse JSON from '{file_path}'")
            return None

        if 'resourceId' not in data or data['resourceId'] != 'canvas':
            log_error(f"Invalid SAP SAM model: missing or incorrect 'resourceId'")
            return None

        model = SAPSAMParser.create_empty_model(data, file_path)

        elements, relationships = SAPSAMParser.process_shapes(data['childShapes'], model)
        model.elements = elements
        model.relationships = relationships

        # a SAP SAP model corresponds to a single diagram/view
        view = ArchimateView(
            id=file_path.stem,
            name=data['properties'].get('name', ''),
            documentation=data['properties'].get('documentation', ''),
            viewpoint=''  # SAP SAM doesn't seem to have a direct equivalent to viewpoint
        )
        model.views.append(view)

        return model

    
    @staticmethod
    def create_empty_model(data, source_file: Path):
        return ParsedModel(
            id=source_file.stem,
            name=data['properties'].get('name', ''),
            documentation=data['properties'].get('documentation', ''),
            file=source_file.as_posix(),
            format="SAP-SAM",
        )

    @staticmethod
    def process_shapes(shapes, model: ParsedModel):
        elements = []
        shape_elements = []
        relationships = []
        shape_queue = shapes.copy()
        
        while shape_queue:
            shape = shape_queue.pop(0)
            
            if 'childShapes' in shape:
                shape_queue.extend(shape['childShapes'])
            
            if ParserUtils.convert_type(shape['stencil']['id']) in ELEMENT_TYPES:
                elements.append(SAPSAMParser.create_element(shape))
                shape_elements.append(shape)
            elif ParserUtils.convert_type(shape['stencil']['id']) in relationship_types:
                # relationships are processed later
                pass
            else:
                warning = f"Unsupported shape type: {shape['stencil']['id']}"
                log_warning(warning)
                model.set_has_warning(True)
                model.warnings.append(warning)

        # Process relationships after all elements are created
        for shape in shapes:
            SAPSAMParser.process_shape_relationships(shape, shape_elements, relationships, model)

        return elements, relationships

    @staticmethod
    def process_shape_relationships(shape, elements, relationships, model: ParsedModel):
        if ParserUtils.convert_type(shape['stencil']['id']) in relationship_types:
            relationship = SAPSAMParser.create_relationship(shape, elements, model)
            if relationship:
                relationships.append(relationship)
        
        if 'childShapes' in shape:
            for child_shape in shape['childShapes']:
                SAPSAMParser.process_shape_relationships(child_shape, elements, relationships, model)

    @staticmethod
    def create_element(shape):
        return ArchimateElement(
            id=shape['resourceId'],
            name=shape['properties'].get('name', ''),
            _type=ParserUtils.convert_type(shape['stencil']['id']),
            documentation=shape['properties'].get('documentation', ''),
            layer=ParserUtils.type_to_layer(shape['stencil']['id'])
        )

    @staticmethod
    def create_relationship(shape, elements, model: ParsedModel):
        target_id = shape.get('target', {}).get('resourceId')
        if target_id is None:
            warning = f"Relationship {shape['resourceId']} has no target"
            log_warning(warning)
            model.set_has_warning(True)
            model.warnings.append(warning)
            return None

        # Find the source element
        source_id = None
        for element in elements:
            if any(outgoing['resourceId'] == shape['resourceId'] for outgoing in element.get('outgoing', [])):
                source_id = element['resourceId']
                break
        
        if source_id is None:
            warning = f"Relationship {shape['resourceId']} has no source"
            log_warning(warning)
            model.set_has_warning(True)
            model.warnings.append(warning)
            return None

        return ArchimateRelationship(
            id=shape['resourceId'],
            name=shape['properties'].get('name', ''),
            source_id=source_id,
            target_id=target_id,
            type=ParserUtils.convert_type(shape['stencil']['id']),
            documentation=shape['properties'].get('documentation', '')
        )