from enum import Enum
from pathlib import Path
from typing import Any, Dict, NamedTuple
from eamodelset.common.utils import (log_info, log_success, log_error)
from eamodelset.parser.model import ParsedModel
from eamodelset.parser.archi_parser import ArchiFileParser

from eamodelset import (SUCCESS, PARSER_ERROR)

class InputFormat(str, Enum):
    XML = "xml"     # Open Group XML format (*.xml)
    ARCHI = "archi" # Archi XML format (*.archimate)
    UNKNOWN = "unknown"

class ParserResponse(NamedTuple):
    model: ParsedModel | None
    error: int

def get_format(input: Path) -> InputFormat:
    # TODO: perform more checks (e.g. check XML schema) to infer format
    if str(input).endswith('.xml'):
        return InputFormat.XML
    elif str(input).endswith('.archimate'):
        return InputFormat.ARCHI
    else:
        return InputFormat.UNKNOWN

def parse_model(input: Path) -> ParserResponse:
    input_format = get_format(input)
    if input_format == InputFormat.UNKNOWN:
        log_error("Unknown ArchiMate format.")
        return ParserResponse(None, PARSER_ERROR)
    
    parsed_model = None
    log_info(f"Parsing input model '{input.name}'...")
    
    if input_format == InputFormat.ARCHI:
        parsed_model = ArchiFileParser.parse_archi_model(input)
    elif input_format == InputFormat.XML:
        parsed_model = None  # TODO
    else:
        log_error("Unknown ArchiMate format.")
        return ParserResponse(None, PARSER_ERROR)

    if parsed_model:
        log_success("Model parsed successfully.")
        return ParserResponse(parsed_model, SUCCESS)
    else:
        log_error("Failed to parse model.")
        return ParserResponse(None, PARSER_ERROR)