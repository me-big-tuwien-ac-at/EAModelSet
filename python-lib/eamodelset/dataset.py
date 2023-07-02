import os
import zipfile
import json
import pandas as pd

ZIP_FILE = 'dataset.zip'
DATASET_FILE = 'dataset.json'
MODELS_DIR ='processed-models'

class EAModelSet:
    
    def __init__(self):
        self.__dataset_zip = os.path.join(os.path.dirname(__file__), ZIP_FILE)
        dataset_file = self._get_json_file_from_zip(self.__dataset_zip, DATASET_FILE)
        self.info = {
            'title': dataset_file['title'],
            'version': dataset_file['version'],
            'last_updated': dataset_file['lastUpdated'],
            'total_models': dataset_file['modelCount']
        }
        self.data = pd.DataFrame.from_dict(dataset_file['modelInfos']).set_index('id')

    def get_model(self, id: str):
        if not isinstance(id, str) or not id:
            raise ValueError('id must be a non-empty string')
        if id not in self.data.index:
            return None
        return self._get_json_file_from_zip(self.__dataset_zip, os.path.join(MODELS_DIR, id, 'model.json'))
    
    def find_models(self):
        raise NotImplementedError

    @staticmethod
    def _get_json_file_from_zip(zip_file, file_name):
        with zipfile.ZipFile(zip_file, 'r') as z:
            try:
                file_info = z.getinfo(file_name)
            except KeyError:
                raise FileNotFoundError(f"{file_name} not found within {zip_file}")
            else:
                with z.open(file_info) as f:
                    return json.load(f)

if __name__ == "__main__":
    dataset = EAModelSet()
    print(dataset.info)
    # {'title': 'EA ModelSet', 'version': '0.0.1', 'last_updated': '30-06-2023', 'total_models': 1009}

    # print(dataset.data)
    # pandas dataframe
    
    example = dataset.get_model(id="id-54c7dff1caa743febe6d27e02ae711df")
    print(example['name'])