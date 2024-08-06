import json
import typer
from pathlib import Path
from eamodelset import __app_name__
from eamodelset.common.utils import log_info

CONFIG_DIR = Path(typer.get_app_dir(__app_name__))
CONFIG_FILE = CONFIG_DIR / "config.json"

CONF_DATASET_PATH = "datasetPath"

def init_app(dataset_path: str):
    if not CONFIG_DIR.exists():
        CONFIG_DIR.mkdir()
        log_info(f"Created config directory '{CONFIG_DIR}'.")
    if not CONFIG_FILE.exists():
        CONFIG_FILE.touch()
        init_config()
        log_info(f"Created config file '{CONFIG_FILE}'.")
    else:
        log_info(f"Existing config file found at '{CONFIG_FILE}'.")
    update_dataset_path(dataset_path)

def get_dataset_path() -> Path:
    if not CONFIG_FILE.exists():
        raise FileNotFoundError(f"Config file '{CONFIG_FILE}' does not exist.")
    with CONFIG_FILE.open("r") as f:
        config = json.load(f)
    return Path(config[CONF_DATASET_PATH])

def init_config():
    with CONFIG_FILE.open("w") as f:
        json.dump({
            CONF_DATASET_PATH: ""
        }, f)

def update_dataset_path(dataset_path: Path):
    if not CONFIG_FILE.exists():
        raise FileNotFoundError(f"Config file '{CONFIG_FILE}' does not exist.")
    with CONFIG_FILE.open("r") as f:
        config = json.load(f)
    config[CONF_DATASET_PATH] = str(dataset_path)
    with CONFIG_FILE.open("w") as f:
        json.dump(config, f)
    log_info(f"Updated config \"{CONF_DATASET_PATH}\" to '{dataset_path}'.")