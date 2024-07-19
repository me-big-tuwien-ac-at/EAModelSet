import os
import subprocess
import typer
from enum import Enum
from rich.console import Console
from pathlib import Path
from typing_extensions import Annotated
from eamodelset.constants import FILE_ARGUMENT
from eamodelset.parser.archi_parser import ArchiFileParser
from eamodelset.common.utils import log, log_error

DEFAULT_ARCHI_APP_PATH = '/Applications/Archi.app/Contents/MacOS/Archi'
ARCHI_CLI_ARGS = ('-application', 'com.archimatetool.commandline.app', '-consoleLog', '-nosplash')
console = Console()

class InputFormat(str, Enum):
    XML = "xml"
    ARCHI = "archi"

class OutputFormat(str, Enum):
    XML = "xml"
    ARCHI = "archi"
    JSON = "json"
    CSV = "csv"
    PNG = "png"

def transform(
    input: Annotated[Path, FILE_ARGUMENT],
    input_format:  Annotated[InputFormat, typer.Argument(case_sensitive=False)],
    output: Annotated[Path, typer.Argument()],
    output_format: Annotated[OutputFormat, typer.Argument(case_sensitive=False)],
    debug: Annotated[bool, typer.Option("--debug", "-d", help="Show debug output.")] = False
):
    """
    Transform a model to different formats
    """
    if input_format == output_format:
        log_error('Using the same format for input and output.')
        return

    if output_format == OutputFormat.JSON:
        transform_to_json(input, input_format, output, debug)
    else:
        if not Path(DEFAULT_ARCHI_APP_PATH).exists():
            log_error(f"Archi application not found at '{DEFAULT_ARCHI_APP_PATH}'.")
            return
        export_model(input, output, output_format)
    log(f"Transformed model in {output_format.value.upper()} format stored in '{output}'", True)

def transform_to_json(input: Path, input_format: InputFormat, output: Path, debug: bool):
    parsed_model = None
    log("Parsing input model...", debug)

    if input_format == InputFormat.ARCHI:
        parsed_model = ArchiFileParser.parse_archi_model(input)
    elif input_format == InputFormat.XML:
        # TODO: add XML parser
        parsed_model = None
    
    if parsed_model:
        log("Model parsed successfully.", debug)
    else:
        log_error("Failed to parse model.")
        return
    
    log('Transforming model to JSON format...', debug)
    json_model = parsed_model.get_json()
    with open(output, "w") as outfile: 
        outfile.write(json_model)
    log('Model transformed successfully.', debug)

def export_model(input: Path, output: Path, output_format: OutputFormat):
    match output_format:
        case OutputFormat.XML:
            export_xml(input, output)
        case OutputFormat.ARCHI:
            export_archi(input, output)
        case OutputFormat.CSV:
            export_csv(input, output)
        case _:
            log_error(f"Unsupported output format: {output_format}")

def export_archi(input: Path, output: Path):
    try:
        subprocess.run([
            DEFAULT_ARCHI_APP_PATH,
            *ARCHI_CLI_ARGS,
            "--xmlexchange.import", os.path.abspath(input),
            "--saveModel", os.path.abspath(output)
        ], check=True)
    except subprocess.CalledProcessError as e:
        log_error(f"An error occurred while exporting the model: {e}")

def export_xml(input: Path, output: Path):
    try:
        subprocess.run([
            DEFAULT_ARCHI_APP_PATH,
            *ARCHI_CLI_ARGS,
            "--loadModel", os.path.abspath(input),
            "--xmlexchange.export", os.path.abspath(output)
        ], check=True)
    except subprocess.CalledProcessError as e:
        log_error(f"An error occurred while exporting the model: {e}")

def export_csv(input: Path, output: Path):
    try:
        subprocess.run([
            DEFAULT_ARCHI_APP_PATH,
            *ARCHI_CLI_ARGS,
            "--loadModel", os.path.abspath(input),
            "--csv.export", os.path.join(os.path.abspath(output), "csv/")
        ], check=True)
    except subprocess.CalledProcessError as e:
        log_error(f"An error occurred while exporting the model: {e}")
