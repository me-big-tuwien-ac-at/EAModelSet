import os
import shutil
import subprocess
from enum import Enum
from typing import List
from pathlib import Path

import typer
from typing_extensions import Annotated

from eamodelset.common.utils import log, log_error
from eamodelset.parser.archi_parser import ArchiFileParser
from eamodelset.parser.sap_sam_parser import SAPSAMParser
from eamodelset.parser.model import ParsedModel

DEFAULT_ARCHI_APP_PATH = '/Applications/Archi.app/Contents/MacOS/Archi'
ARCHI_CLI_ARGS = ('-application', 'com.archimatetool.commandline.app', '-consoleLog', '-nosplash')
INPUT_FILE_ARG = typer.Argument(exists=True, file_okay=True, dir_okay=False, writable=False, readable=True, resolve_path=True)

class InputFormat(str, Enum):
    XML = "xml"
    ARCHI = "archi"
    SAP_SAM = "sap-sam"

class OutputFormat(str, Enum):
    XML = "xml"
    ARCHI = "archi"
    JSON = "json"
    CSV = "csv"
    PNG = "png"

def batch_transform(
    input_dir: Annotated[Path, typer.Argument(exists=True, file_okay=False, dir_okay=True, readable=True, resolve_path=True)],
    input_format: Annotated[InputFormat, typer.Argument(case_sensitive=False)],
    output_dir: Annotated[Path, typer.Argument()],
    output_format: Annotated[OutputFormat, typer.Argument(case_sensitive=False)],
):
    """Transform multiple models in a directory to different formats."""
    if not output_dir.exists():
        output_dir.mkdir(parents=True)

    input_files = get_input_files(input_dir, input_format)

    for input_file in input_files:
        output_file = output_dir / f"{input_file.stem}.{output_format.value}"
        transform(input_file, input_format, output_file, output_format)

    log(f"Batch transformation complete. Transformed models stored in {output_format.value.upper()} format at '{output_dir}'", True)


def get_input_files(input_dir: Path, input_format: InputFormat) -> List[Path]:
    if input_format == InputFormat.ARCHI or input_format == InputFormat.XML:
        extension = f".{input_format.value}"
    else:
        extension = ".json"
    return [f for f in input_dir.iterdir() if f.is_file() and f.suffix.lower() == extension]


def transform(
    input: Annotated[Path, INPUT_FILE_ARG],
    input_format:  Annotated[InputFormat, typer.Argument(case_sensitive=False)],
    output: Annotated[Path, typer.Argument()],
    output_format: Annotated[OutputFormat, typer.Argument(case_sensitive=False)],
):
    """Transform a model to different formats."""
    if not validate_args(input_format, output, output_format):
        return
    
    if output_format == OutputFormat.JSON:
        transform_to_json(input, input_format, output)
    else:
        if not Path(DEFAULT_ARCHI_APP_PATH).exists():
            log_error(f"Archi application not found at '{DEFAULT_ARCHI_APP_PATH}'.")
            return
        if input_format == InputFormat.SAP_SAM and output_format != OutputFormat.JSON:
            log_error("Unsupported output format!")
            return
        export_model(input, input_format, output, output_format)
        
    log(f"Transformed model stored in {output_format.value.upper()} format at '{output}'", True)

def validate_args(input_format: InputFormat, output: Path, output_format: OutputFormat) -> bool:
    if input_format == output_format:
        log_error('Using the same format for input and output.')
        return False
    if output_format in {OutputFormat.CSV, OutputFormat.PNG} and not output.is_dir():
        log_error(f"{output_format.value.upper()} output format requires output path '{output}' to be a directory.")
        return False
    return True

def transform_to_json(input: Path, input_format: InputFormat, output: Path):
    parsed_model = parse_model(input, input_format)
    if parsed_model:
        json_model = parsed_model.get_json()
        output.write_text(json_model)

def parse_model(input: Path, input_format: InputFormat) -> (ParsedModel | None):
    parsed_model = None
    log("Parsing input model...")
    if input_format == InputFormat.ARCHI:
        parsed_model = ArchiFileParser.parse_archi_model(input)
    elif input_format == InputFormat.XML:
        parsed_model = None  # TODO
    elif input_format == InputFormat.SAP_SAM:
        parsed_model = SAPSAMParser.parse_sap_sam_model(input)

    if parsed_model:
        log("Model parsed successfully.")
        return parsed_model
    else:
        log_error("Failed to parse model.")
        return None

def export_model(input: Path, input_format: InputFormat, output: Path, output_format: OutputFormat):
    try:
        match output_format:
            case OutputFormat.XML:
                export_xml(input, output)
            case OutputFormat.ARCHI:
                export_archi(input, output)
            case OutputFormat.CSV:
                export_csv(input, output)
            case OutputFormat.PNG:
                parsed_model = parse_model(input, input_format)
                if parsed_model:
                    export_png(parsed_model, input, output)
            case _:
                log_error(f"Unsupported output format: {output_format}")
    except subprocess.CalledProcessError as e:
        log_error(f"An error occurred while exporting the model: {e}")

def export_archi(input: Path, output: Path):
    subprocess.run([
        DEFAULT_ARCHI_APP_PATH,
        *ARCHI_CLI_ARGS,
        "--xmlexchange.import", os.path.abspath(input),
        "--saveModel", os.path.abspath(output)
    ], check=True)

def export_xml(input: Path, output: Path):
    subprocess.run([
        DEFAULT_ARCHI_APP_PATH,
        *ARCHI_CLI_ARGS,
        "--loadModel", os.path.abspath(input),
        "--xmlexchange.export", os.path.abspath(output)
    ], check=True)

def export_csv(input: Path, output: Path):
    subprocess.run([
        DEFAULT_ARCHI_APP_PATH,
        *ARCHI_CLI_ARGS,
        "--loadModel", os.path.abspath(input),
        "--csv.export", os.path.join(os.path.abspath(output), "csv/")
    ], check=True)

def export_png(parsed_model: ParsedModel, input: Path, output: Path):
    html_output_dir = output / "html"
    subprocess.run([
        DEFAULT_ARCHI_APP_PATH,
        *ARCHI_CLI_ARGS,
        "--loadModel", os.path.abspath(input),
        "--html.createReport", os.path.abspath(html_output_dir)
    ], check=True)

    images_dir = html_output_dir / parsed_model.id / "images"
    png_dir = output / "png"
    png_dir.mkdir(parents=True, exist_ok=True)
    shutil.copytree(images_dir, png_dir, dirs_exist_ok=True)
    shutil.rmtree(html_output_dir)
