from pathlib import Path
from xml.etree import ElementTree as ET

'''
See ArchiMate Specification: 
https://pubs.opengroup.org/architecture/archimate32-doc/ch-Summary-of-Language-Notation.html
'''

business_types = {
    'BusinessActor',
    'BusinessRole',
    'BusinessCollaboration',
    'BusinessInterface',
    'BusinessProcess',
    'BusinessFunction',
    'BusinessInteraction',
    'BusinessService',
    'BusinessEvent',
    'BusinessObject',
    'Contract',
    'Representation',
    'Product'
}
application_types = {
    'ApplicationComponent',
    'ApplicationCollaboration',
    'ApplicationInterface',
    'ApplicationProcess',
    'ApplicationFunction',
    'ApplicationInteraction',
    'ApplicationService',
    'ApplicationEvent',
    'DataObject'
}
technology_types = {
    'Node',
    'Device',
    'SystemSoftware',
    'TechnologyCollaboration',
    'TechnologyInterface',
    'TechnologyProcess',
    'TechnologyFunction',
    'TechnologyInteraction',
    'TechnologyService',
    'TechnologyEvent',
    'Artifact',
    'CommunicationNetwork',
    'Path',
}
physical_types = {
    'Equipment', 
    'DistributionNetwork', 
    'Facility', 
    'Material'
}
motivation_types = {
    'Stakeholder',
    'Driver',
    'Assessment',
    'Goal',
    'Outcome',
    'Principle',
    'Requirement',
    'Constraint',
    'Value',
    'Meaning'
}
strategy_types = {
    'Resource', # structure element, but neither active nor passive
    'Capability',
    'ValueStream',
    'CourseOfAction'
}
implementation_migration_types = {
    'WorkPackage',
    'ImplementationEvent',
    'Deliverable',
    'Plateau',
    'Gap'
}
other_types = {
    'Location',
    'Grouping',
    'Junction',
    'OrJunction',
    'AndJunction'
}
relationship_types = {
    'Association',
    'Serving',
    'Flow',
    'Realization',
    'Aggregation',
    'Influence',
    'Composition',
    'Triggering',
    'Assignment',
    'Specialization',
    'Access'
}

layer_to_types = {
    "Business": business_types,
    "Application": application_types,
    "Technology": technology_types,
    "Physical": physical_types,
    "Motivation": motivation_types,
    "Strategy": strategy_types,
    "Implementation & Migration": implementation_migration_types,
    "Other": other_types
}

class ParserUtils:

    @staticmethod
    def parse_document(file_path: Path) -> ET.ElementTree:
        tree = ET.parse(file_path)
        return tree
    
    @staticmethod
    def remove_ns(root: ET.Element, ns: str):
        if not ns.startswith('{'): ns = '{' + ns
        if not ns.endswith('}'): ns = ns + '}'
        for e in root.iter():
            e.tag = e.tag.replace(ns, '')
        return root

    @staticmethod
    def get_direct_child(parent, name):
        for child in parent:
            if child.tag == name:
                return child
        return None
    
    @staticmethod
    def convert_type(_type):
        _type = _type.strip()
        if _type.startswith("archimate:"):
            _type = _type[10:]
        type_map = {
            "InfrastructureService": "TechnologyService",
            "InfrastructureInterface": "TechnologyInterface",
            "InfrastructureFunction": "TechnologyFunction",
            "Network": "CommunicationNetwork",
            "CommunicationPath": "Path",
            "RealisationRelationship": "RealizationRelationship",
            "SpecialisationRelationship": "SpecializationRelationship"
        }
        return type_map.get(_type, _type)
    
    @staticmethod
    def type_to_layer(_type):
        if ParserUtils.is_motivation_element(_type):
            return "motivation"
        elif ParserUtils.is_strategy_element(_type):
            return "strategy"
        elif ParserUtils.is_business_element(_type):
            return "business"
        elif ParserUtils.is_application_element(_type):
            return "application"
        elif ParserUtils.is_technology_element(_type):
            return "technology"
        elif ParserUtils.is_implementation_migration_element(_type):
            return "implementation_migration"
        elif ParserUtils.is_other_element(_type):
            return "other"
        else:
            return "unknown"

    @staticmethod
    def is_element(type):
        return (
            ParserUtils.is_motivation_element(type) or
            ParserUtils.is_strategy_element(type) or
            ParserUtils.is_business_element(type) or
            ParserUtils.is_application_element(type) or
            ParserUtils.is_technology_element(type) or
            ParserUtils.is_implementation_migration_element(type) or
            ParserUtils.is_other_element(type)
        )
    
    @staticmethod
    def is_motivation_element(type):
        return type in motivation_types
    
    @staticmethod
    def is_strategy_element(type):
        return type in strategy_types

    @staticmethod
    def is_business_element(type):
        return type in business_types

    @staticmethod
    def is_application_element(type):
        return type in application_types

    @staticmethod
    def is_technology_element(type):
        return type in technology_types

    @staticmethod
    def is_implementation_migration_element(type):
        return type in implementation_migration_types

    @staticmethod
    def is_other_element(type):
        return type in other_types

    @staticmethod
    def is_relationship(type):
        return type.endswith("Relationship")

    @staticmethod
    def is_diagram_model(type):
        return type == "ArchimateDiagramModel"

    @staticmethod
    def is_sketch_model(type):
        return type == "SketchModel"
