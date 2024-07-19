# parser for ArchiMate models created through Archi (i.e. ending in *.archimate)
from pathlib import Path
from xml.etree import ElementTree as ET
from rich import print
from eamodelset.parser.constants import ParserConstants
from eamodelset.parser.model import (ParsedModel, ArchimateElement, ArchimateRelationship, ArchimateView)
from eamodelset.parser.utils import ParserUtils
from eamodelset.common.utils import log, log_warning, log_error

class ArchiFileParser:

    @staticmethod
    def parse_archi_model(file_path: Path) -> ParsedModel | None:
        doc = ParserUtils.parse_document(file_path)
        if doc is None:
            log_error(f"Failed to parse document '{file_path}'")
            return None
        
        root = ArchiFileParser.remove_namespaces(doc.getroot())
        if root.tag != ParserConstants.Archi.MODEL_TAG:
            log_error(f"Root node tag should be <{ParserConstants.Archi.MODEL_TAG}> but was <{root.tag}>")
            return None
        
        model = ArchiFileParser.create_empty_model(root, file_path)
        if not ArchiFileParser.validate_model(root):
            model.set_has_warning(True)

        elements = root.findall(f".//{ParserConstants.Archi.ELEMENT_TAG}")
        if not elements:
            log_error(f"Empty model: no <{ParserConstants.Archi.ELEMENT_TAG}> tags found!")
            return None
        
        id_to_element, id_to_relationship = {}, {}
        for element in elements:
            element_type = ParserUtils.convert_type(element.get(ParserConstants.Archi.TYPE_ATTR))
            ArchiFileParser.process_element(element, element_type, model, id_to_element, id_to_relationship)
        
        return model
    
    @staticmethod
    def process_element(element, element_type, model, id_to_element, id_to_relationship):
        # ELEMENT
        if ParserUtils.is_element(element_type):
            if not ArchiFileParser.validate_element(element):
                model.set_has_warning(True)
                return
            archi_element = ArchiFileParser.create_element(element, element_type)
            model.elements.append(archi_element)
            id_to_element[archi_element.id] = archi_element

        # RELATIONSHIP
        elif ParserUtils.is_relationship(element_type):
            if not ArchiFileParser.validate_relation(element):
                model.set_has_warning(True)
                return
            relation = ArchiFileParser.create_relation(element, element_type, id_to_element, id_to_relationship)
            # can be None if source/target element is not found
            if relation:
                model.relationships.append(relation)
            else:
                model.set_has_warning(True)
        
        # VIEW
        elif ParserUtils.is_diagram_model(element_type):
            if not ArchiFileParser.validate_view(element):
                model.set_has_warning(True)
                return
            view = ArchiFileParser.create_view(element)
            model.views.append(view)
        elif ParserUtils.is_sketch_model(element_type):
            pass
        else:
            log_error(f"Unknown element type '{element_type}'")
    
    # --------------------------------------------------
    #                 OBJECT CREATION
    # --------------------------------------------------

    @staticmethod
    def create_empty_model(root: ET.Element, source_file: Path):
        return ParsedModel(
            id=root.get(ParserConstants.Archi.ID_ATTR),
            name=root.get(ParserConstants.Archi.NAME_ATTR),
            documentation=ArchiFileParser.get_documentation(root),
            file=source_file.as_posix(),
            format=ParserConstants.Archi.FILE_EXTENSION.upper(),
        )

    @staticmethod
    def create_element(element, type):
        return ArchimateElement(
            id=element.get(ParserConstants.Archi.ID_ATTR),
            name=element.get(ParserConstants.Archi.NAME_ATTR, ""),
            _type=type,
            documentation=ArchiFileParser.get_documentation(element),
            layer=ParserUtils.type_to_layer(type)
        )
    
    @staticmethod
    def create_relation(element, type, id_lookup, id_lookup2):
        source_id = ArchiFileParser.get_id_from_lookup(element.get(ParserConstants.Archi.SOURCE_ATTR), id_lookup, id_lookup2)
        target_id = ArchiFileParser.get_id_from_lookup(element.get(ParserConstants.Archi.TARGET_ATTR), id_lookup, id_lookup2)
        if source_id is None or target_id is None:
            return None
        return ArchimateRelationship(
            id=element.get(ParserConstants.Archi.ID_ATTR),
            name=element.get(ParserConstants.Archi.NAME_ATTR, ""),
            source_id=source_id,
            target_id=target_id,
            type=type,
            documentation=ArchiFileParser.get_documentation(element)
        )
    
    @staticmethod
    def create_view(element):
        return ArchimateView(
            id=element.get(ParserConstants.Archi.ID_ATTR),
            name=element.get(ParserConstants.Archi.NAME_ATTR, ""),
            documentation=ArchiFileParser.get_documentation(element),
            viewpoint=element.get(ParserConstants.Archi.VIEWPOINT_ATTR, "")
        )
    
    # --------------------------------------------------
    #                   UTILITIES
    # --------------------------------------------------
    
    @staticmethod
    def remove_namespaces(root):
        root = ParserUtils.remove_ns(root, ParserConstants.Archi.ARCHIMATE_NS_VAL)
        return ParserUtils.remove_ns(root, ParserConstants.Archi.XML_NS)

    @staticmethod
    def get_id_from_lookup(attr_value, id_lookup, id_lookup2):
        item = id_lookup.get(attr_value) or id_lookup2.get(attr_value)
        if item is None:
            ArchiFileParser.log_error(f"Unknown id={attr_value}")
            return None
        return item.id
    
    @staticmethod
    def get_documentation(element):
        doc_tag = "documentation" if element.tag != ParserConstants.Archi.MODEL_TAG else "purpose"
        docs = element.findall(doc_tag)
        if len(docs) == 1:
            return docs[0].text
        elif len(docs) > 1:
            log_warning(f"Element with id={element.get(ParserConstants.Archi.ID_ATTR)} has more than one <documentation> element!")
            return None
        return ""

    # --------------------------------------------------
    #                   VALIDATION
    # --------------------------------------------------

    @staticmethod
    def validate_attributes(element, attributes):
        missing_attrs = [attr for attr in attributes if not element.get(attr)]
        if missing_attrs:
            log_error(f"Missing attributes: {', '.join(missing_attrs)} in element with id={element.get(ParserConstants.Archi.ID_ATTR)}")
            return False
        return True

    @staticmethod
    def validate_model(model):
        return ArchiFileParser.validate_attributes(model, [
            ParserConstants.Archi.NAME_ATTR, 
            ParserConstants.Archi.ID_ATTR, 
            ParserConstants.Archi.VERSION_ATTR
        ])
    
    @staticmethod
    def validate_element(element):
        return ArchiFileParser.validate_attributes(element, [
            ParserConstants.Archi.ID_ATTR, 
            ParserConstants.Archi.TYPE_ATTR
        ])
    
    @staticmethod
    def validate_relation(relation):
        return ArchiFileParser.validate_attributes(relation, [
            ParserConstants.Archi.ID_ATTR, 
            ParserConstants.Archi.TYPE_ATTR, 
            ParserConstants.Archi.SOURCE_ATTR, 
            ParserConstants.Archi.TARGET_ATTR
        ])

    @staticmethod
    def validate_view(element):
        return ArchiFileParser.validate_attributes(element, [
            ParserConstants.Archi.ID_ATTR, 
            ParserConstants.Archi.NAME_ATTR
        ])