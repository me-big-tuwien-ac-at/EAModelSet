from pathlib import Path
import shutil
from eamodelset.commands.transform import export_archi, export_xml
from eamodelset.common.utils import log_error, log_info, requires_init
from eamodelset.dataset import get_dataset
import typer
from typing_extensions import Annotated
from eamodelset.parser.parse import parse_model, get_format, InputFormat
from eamodelset import (PARSER_ERROR, config)

MODEL_FILE_ARG = typer.Argument(exists=True, file_okay=True, dir_okay=False, writable=False, readable=True, resolve_path=True)

@requires_init
def add_model(model_file_path: Annotated[Path, MODEL_FILE_ARG]):
    # validate input file

    # parse model -> ParsedModel
    parser_response = parse_model(model_file_path)
    if parser_response.error == PARSER_ERROR:
        raise typer.Exit()
    
    dataset = get_dataset()
    log_info('Adding model to dataset...')

    # check if ID exists in dataset
    model_id = parser_response.model.id
    if dataset.id_exists(model_id):
        log_error(f"ID '{model_id}' already exists.")
        raise typer.Exit()
    
    # create model directory <model_id>/
    model_dir = config.get_dataset_path() / model_id
    model_dir.mkdir(parents=True, exist_ok=False)
    log_info(f"Created directory for model ID '{model_id}'.")

    # store source model
    source_model_path = model_dir / model_file_path.name
    shutil.copy(model_file_path, source_model_path)
    log_info(f"Stored source model at '{source_model_path}'.")

    # export to Archi/XML, CSV
    input_format = get_format(model_file_path)
    if input_format == InputFormat.ARCHI:
        xml_export_path = model_dir / f"{model_id}.xml"
        export_xml(model_file_path, xml_export_path)
        log_info(f"Exported model as XML format to '{xml_export_path}'.")
    elif input_format == InputFormat.XML:
        archi_export_path = model_dir / f"{model_id}.archimate"
        export_archi(model_file_path, archi_export_path)
        log_info(f"Exported model as Archi format to '{archi_export_path}'.")
    else:
        log_error('Unknown format')
        raise typer.Exit()

    # create JSON model + set properties

    # store files in model directory
