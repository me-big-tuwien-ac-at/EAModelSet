import json
from pathlib import Path
import typer
from typing_extensions import Annotated

from eamodelset.dataset import EAModelSet
from eamodelset.common.utils import (log_success, log_error)
from eamodelset import config, dataset

# DATASET_DIR_ARG = typer.Option(exists=True, file_okay=False, dir_okay=True, writable=True, readable=True, resolve_path=True, prompt="Path to dataset")

DATASET_DIR_ARG = typer.Argument(exists=True, file_okay=False, dir_okay=True, writable=True, readable=True, resolve_path=True)

def init(dataset_path: Annotated[Path, DATASET_DIR_ARG]):
    if dataset.validate(dataset_path):
        config.init_app(dataset_path)
        log_success("Initialized dataset.")
    else:
        log_error("Failed to initialize dataset.")