# parser for ArchiMate models created through Archi (i.e. ending in *.archimate)
from pathlib import Path
from xml.etree import ElementTree as ET
from rich import print
from eamodelset.parser.constants import ParserConstants
from eamodelset.parser.model import (ParsedModel, ArchimateElement, ArchimateRelationship, ArchimateView)
from eamodelset.parser.utils import ParserUtils

class ArchiFileParser:

    @staticmethod
    def parse_archi_model(file_path: Path) -> ParsedModel | None:
        doc = ParserUtils.parse_document(file_path)
        if doc is None:
            print(f"[bold red]Error! Failed to parse document '{file_path}'[/bold red]")
            return None
        
        root = doc.getroot()
        # remove namespaces
        root = ParserUtils.remove_ns(root, ParserConstants.Archi.ARCHIMATE_NS_VAL)
        root = ParserUtils.remove_ns(root, ParserConstants.Archi.XML_NS)
        if root.tag != ParserConstants.Archi.MODEL_TAG:
            print(f"[bold red]Error! Root node tag should be <{ParserConstants.Archi.MODEL_TAG}> but was <{root.tag}>[/bold red]")
            return None
        
        model = ArchiFileParser.create_empty_archi_model(root, file_path)
        is_valid_model = ArchiFileParser.validate_model(root)
        if not is_valid_model:
            model.set_has_warning(True)

        # find all <element>'s
        elements = root.findall(f".//{ParserConstants.Archi.ELEMENT_TAG}")
        if not elements:
            print(f"[bold red]Empty model: no <{ParserConstants.Archi.ELEMENT_TAG}> tags found![/bold red]")
            return model
        
        id_to_element = {}
        id_to_relationship = {}
        for element in elements:
            element_type = ParserUtils.convert_type(element.get(ParserConstants.Archi.TYPE_ATTR))
            # ELEMENT
            if ParserUtils.is_element(element_type):
                is_valid_element = ArchiFileParser.validate_element(element)
                if not is_valid_element:
                    model.set_has_warning(True)
                archi_element = ArchiFileParser.create_archi_element(element, element_type)
                model.elements.append(archi_element)
                id_to_element[archi_element.id] = archi_element

            # RELATIONSHIP
            elif ParserUtils.is_relationship(element_type):
                is_valid_relationship = ArchiFileParser.validate_relation(element)
                relation = ArchiFileParser.create_archi_relation(element, element_type, id_to_element, id_to_relationship)
                if not is_valid_relationship or relation is None:
                    model.set_has_warning(True)
                if relation:
                    model.relationships.append(relation)
            
            # VIEW
            elif ParserUtils.is_diagram_model(element_type):
                is_valid_view = ArchiFileParser.validate_view(element)
                if not is_valid_view:
                    model.set_has_warning(True)
                view = ArchiFileParser.create_view(element)
                model.views.append(view)
            elif ParserUtils.is_sketch_model(element_type):
                # TODO
                pass
            else:
                print(f"[bold red]Error! Unknown element type '{element_type}'[/bold red]")

        return model

    

    @staticmethod
    def create_empty_archi_model(root: ET.Element, source_file: Path):
        return ParsedModel(
            id=root.get(ParserConstants.Archi.ID_ATTR),
            name=root.get(ParserConstants.Archi.NAME_ATTR),
            documentation=ArchiFileParser.get_documentation(root),
            file=source_file.as_posix(),
            format=ParserConstants.Archi.FILE_EXTENSION.upper(),
        )
    
    @staticmethod
    def create_archi_element(element, type):
        return ArchimateElement(
            id=element.get(ParserConstants.Archi.ID_ATTR),
            name=element.get(ParserConstants.Archi.NAME_ATTR, ""),
            _type=type,
            documentation=ArchiFileParser.get_documentation(element),
            layer=ParserUtils.type_to_layer(type)
        )
    
    @staticmethod
    def create_archi_relation(element, type, id_lookup, id_lookup2):
        if not element.get(ParserConstants.Archi.ID_ATTR) or not element.get(ParserConstants.Archi.SOURCE_ATTR) or not element.get(ParserConstants.Archi.TARGET_ATTR):
            print(f"[bold red]Missing attributes in {element.tag}[/bold red]")
            return None

        source_id, target_id = None, None
        source = id_lookup.get(element.get(ParserConstants.Archi.SOURCE_ATTR))
        if source is None:
            source_rel = id_lookup2.get(element.get(ParserConstants.Archi.SOURCE_ATTR))
            if source_rel is None:
                print(f"[bold red]Unknown source={element.get(ParserConstants.Archi.SOURCE_ATTR)}[/bold red]")
                return None
            source_id = source_rel.id
        else:
            source_id = source.id

        target = id_lookup.get(element.get(ParserConstants.Archi.TARGET_ATTR))
        if target is None:
            target_rel = id_lookup2.get(element.get(ParserConstants.Archi.TARGET_ATTR))
            if target_rel is None:
                print(f"[bold red]Unknown target={element.get(ParserConstants.Archi.TARGET_ATTR)}[/bold red]")
                return None
            target_id = target_rel.id
        else:
            target_id = target.id

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
    
    @staticmethod
    def get_documentation(element):
        doc_tag = "documentation" if element.tag != ParserConstants.Archi.MODEL_TAG else "purpose"
        docs = element.findall(doc_tag)
        if len(docs) == 1:
            return docs[0].text
        elif len(docs) > 1:
            print(f"[bold red]Element with id={element.get(ParserConstants.Archi.ID_ATTR)} has more than 1 documentation element![/bold red]")
            return None
        return ""

    @staticmethod
    def validate_model(model):
        if not model.get(ParserConstants.Archi.NAME_ATTR) or not model.get(ParserConstants.Archi.ID_ATTR) or not model.get(ParserConstants.Archi.VERSION_ATTR):
            print("[bold red]Missing one of attributes: 'name', 'id' or 'version'[/bold red]")
            return False
        return True
    
    @staticmethod
    def validate_element(element):
        if not element.get(ParserConstants.Archi.ID_ATTR) or not element.get(ParserConstants.Archi.TYPE_ATTR):
            print(f"[bold red]Missing one of required attributes: '{ParserConstants.Archi.ID_ATTR}' or '{ParserConstants.Archi.TYPE_ATTR}'[/bold red]")   
            return False
        return True
    
    @staticmethod
    def validate_relation(relation):
        if not relation.get(ParserConstants.Archi.ID_ATTR) or not relation.get(ParserConstants.Archi.TYPE_ATTR) or not relation.get(ParserConstants.Archi.SOURCE_ATTR) or not relation.get(ParserConstants.Archi.TARGET_ATTR):
            print(f"[bold red]Missing one of attributes: '{ParserConstants.Archi.ID_ATTR}', '{ParserConstants.Archi.TYPE_ATTR}', '{ParserConstants.Archi.SOURCE_ATTR}' or '{ParserConstants.Archi.TARGET_ATTR}'[/bold red]")
            return False
        return True

    @staticmethod
    def validate_view(element):
        if not element.get(ParserConstants.Archi.ID_ATTR) or not element.get(ParserConstants.Archi.NAME_ATTR):
            print(f"[bold red]Missing one of required attributes: '{ParserConstants.Archi.ID_ATTR}' or '{ParserConstants.Archi.NAME_ATTR}'[/bold red]")
            return False
        return True