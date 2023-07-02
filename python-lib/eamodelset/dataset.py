import os
import copy
import zipfile
import json
import csv
import pandas as pd
import numpy as np

ZIP_FILE = 'dataset.zip'
DATASET_FILE = 'dataset.json'
MODELS_DIR ='processed-models'
MODEL_FILE_JSON = 'model.json'
CSV_DIR = 'csv'

class EAModelSet:
    
    def __init__(self):
        self.__dataset_zip = os.path.join(os.path.dirname(__file__), ZIP_FILE)
        dataset_file = self._get_file_from_zip(self.__dataset_zip, DATASET_FILE, 'JSON')
        self.info = {
            'title': dataset_file['title'],
            'version': dataset_file['version'],
            'last_updated': dataset_file['lastUpdated'],
            'total_models': dataset_file['modelCount']
        }
        self.data = pd.DataFrame.from_dict(dataset_file['modelInfos']).set_index('id')
    

    def to_matrix(self, data: pd.DataFrame):
        return np.asmatrix(data)


    def get_model(self, id: str):
        if not isinstance(id, str) or not id:
            raise ValueError('id must be a non-empty string')
        if id not in self.data.index:
            return None
        return self._get_file_from_zip(self.__dataset_zip, os.path.join(MODELS_DIR, id, MODEL_FILE_JSON), 'JSON')

    
    def find_models(self, name='', source='', lang='', format='', min_elems=0, max_elems=10000):
        df = copy.deepcopy(self.data)
        
        # filter dataframe
        if name != '':
            df = df[df['name'].str.contains(name)]
        if source != '':
            df = df[df['source'].str.lower() == source.lower()]
        if format != '':
            df = df[df.formats.apply(lambda x: format in x)]
        if lang != '':
            df = df[df['language'] == lang]

        # TODO: tags
        # TODO: duplicates

        if min_elems > 0:
            df = df[df['elementCount'] >= min_elems]
        if max_elems < 10000:
            df = df[df['elementCount'] <= max_elems]

        # TODO: min/max relationships
        # TODO: min/max views

        # retrieve models from zip by ID
        models = []
        for id in df.index.tolist(): models.append(self.get_model(id))
        return models


    def get_csv_model(self, model_id: str) -> dict:
        return {
            'elements': self._get_file_from_zip(self.__dataset_zip, os.path.join(MODELS_DIR, model_id, CSV_DIR, 'elements.csv'), 'CSV'),
            'relations': self._get_file_from_zip(self.__dataset_zip, os.path.join(MODELS_DIR, model_id, CSV_DIR, 'relations.csv'), 'CSV'),
            'properties': self._get_file_from_zip(self.__dataset_zip, os.path.join(MODELS_DIR, model_id, CSV_DIR, 'properties.csv'), 'CSV')
        }


    @staticmethod
    def _get_file_from_zip(zip_file, file_name, format):
        with zipfile.ZipFile(zip_file, 'r') as z:
            try:
                file_info = z.getinfo(file_name)
            except KeyError:
                raise FileNotFoundError(f"{file_name} not found within {zip_file}")
            else:
                if format.upper() == 'JSON':
                    with z.open(file_info) as f:
                        return json.load(f)
                elif format.upper() == 'CSV':
                    with z.open(file_info) as f:
                        return pd.read_csv(f)


if __name__ == "__main__":
    dataset = EAModelSet()
    print(dataset.info)
    # {'title': 'EA ModelSet', 'version': '0.0.1', 'last_updated': '30-06-2023', 'total_models': 1009}

    # print(dataset.data)
    # pandas dataframe

    # print(dataset.to_matrix(dataset.data))
    
    #example = dataset.get_model(id="id-54c7dff1caa743febe6d27e02ae711df")
    # print(example['name'])

    # models = dataset.find_models(name='archi', source="github", lang="en", format='CSV')
    # print(len(models))

    #models2 = dataset.find_models(lang="en", min_elems=1000)
    #print(len(models2))

    # csv_files = dataset.get_csv_model('id-54c7dff1caa743febe6d27e02ae711df')
    # print(csv_files['elements'])

    # for m in models2: print(m['name'])

    # get all models
    # models3 = dataset.find_models()
    # print(len(models3))