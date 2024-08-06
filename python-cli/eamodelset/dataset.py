import json
from pathlib import Path
from typing import Any, Dict, List
from eamodelset import config, dataset
from eamodelset.common.utils import log_error   

class EAModelSet:
    def __init__(self, dataset_path: Path):
        dataset_json = dataset_path / "dataset.json"
        with dataset_json.open("r") as d:
            self.dataset = json.load(d)
    
    def get_model_infos(self) -> List[Dict[str, Any]]:
        return self.dataset.get("modelInfos")
    
    def id_exists(self, id: str) -> bool:
        model_infos = self.get_model_infos()
        return any(model_info.get("id") == id for model_info in model_infos)

def validate(dataset_path: Path) -> bool:
    dataset_json = dataset_path / "dataset.json"
    processed_models = dataset_path / "processed-models"
    # validate dataset.json file and processed-models/ dir exists
    if not dataset_json.exists():
        log_error(f"dataset.json not found in {dataset_path}")
        return False
    if not processed_models.exists():
        log_error(f"processed-models/ directory not found in {dataset_path}")
        return False
    return True

def get_dataset() -> EAModelSet:
    if config.CONFIG_FILE.exists():
        dataset_path = config.get_dataset_path()
        if dataset.validate(dataset_path):
            return EAModelSet(dataset_path)
    else:
        log_error("Config file not found. Run `eamodelset init path/to/dataset` first.")