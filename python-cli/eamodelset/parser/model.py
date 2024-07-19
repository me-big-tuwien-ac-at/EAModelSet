import json

class ParsedModel:
    def __init__(self, id: str, name: str, documentation: str, file: str, format: str):
        self.id = id
        self.name = name
        self.documentation = documentation
        self.file = file
        self.format = format
        self.elements = []
        self.relationships = []
        self.views = []
        self.has_warning = False

    def set_has_warning(self, has_warning):
        self.has_warning = has_warning

    def get_json(self) -> str:
        model_dict = {
            "id": self.id,
            "name": self.name,
            "documentation": self.documentation,
            "file": self.file,
            "format": self.format,
            "elements": [element.get_dict() for element in self.elements],
            #"relationships": [relationship.__dict__ for relationship in self.relationships],
            #"views": [view.__dict__ for view in self.views],
            "has_warning": self.has_warning
        }
        return json.dumps(model_dict, indent=4)


class ArchimateElement:
    def __init__(self, id, name, _type, documentation, layer):
        self.id = id
        self.name = name
        self._type = _type
        self.documentation = documentation
        self.layer = layer
    
    def get_dict(self) -> dict:
        return {
            "id": self.id,
            "name": self.name,
            "type": self._type,
            "layer": self.layer,
            "documentation": self.documentation
        }

class ArchimateView:
    def __init__(self, id, name, documentation, viewpoint):
        self.id = id
        self.name = name
        self.documentation = documentation
        self.viewpoint = viewpoint

class ArchimateRelationship:
    def __init__(self, id, name, source_id, target_id, type, documentation):
        self.id = id
        self.name = name
        self.source_id = source_id
        self.target_id = target_id
        self.type = type
        self.documentation = documentation