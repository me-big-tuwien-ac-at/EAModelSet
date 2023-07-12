import os
import sys
import copy
import zipfile
import json
import csv
import pandas as pd
import numpy as np

EA_MODELSET_DIR = '.ea-modelset'
DATASET_DIR = 'dataset'
ZIP_FILE = 'dataset.zip'
DATASET_FILE = 'dataset.json'
PROCESSED_MODELS_DIR ='processed-models'
MODEL_FILE_JSON = 'model.json'
CSV_DIR = 'csv'

class EAModelSet:
    
    def __init__(self):
        self.ea_modelset_path = os.path.join(os.path.expanduser('~'), EA_MODELSET_DIR)
        dataset_zip_path = os.path.join(os.path.dirname(__file__), ZIP_FILE)

        # check .ea-modelset/ directory exists
        if os.path.exists(self.ea_modelset_path):
            print(f"Dataset path found: {self.ea_modelset_path}")  
        else:
            print(f"Dataset path {self.ea_modelset_path} not found! Creating directory...")
            os.mkdir(self.ea_modelset_path)
            # verify directory was created
            if not os.path.exists(self.ea_modelset_path):
                raise FileNotFoundError(f"ERROR: directory for dataset could not be created at path '{self.ea_modelset_path}'!")
            
            print("Directory created!")

            print(f"Extracting zip files into '{self.ea_modelset_path}'...")
            with zipfile.ZipFile(dataset_zip_path, 'r') as zip_ref:
                zip_ref.extractall(self.ea_modelset_path)
        
        print("Veryfing extracted dataset...")
        self.extracted_dataset_path = os.path.join(self.ea_modelset_path, DATASET_DIR)
        self.dataset_json_file_path = os.path.join(self.ea_modelset_path, DATASET_DIR, DATASET_FILE)
        self.processed_models_dir_path = os.path.join(self.ea_modelset_path, DATASET_DIR, PROCESSED_MODELS_DIR)
        if not os.path.exists(self.extracted_dataset_path):
            raise FileNotFoundError(f"ERROR: extracted files from zip not found at '{self.extracted_dataset_path}'!")
        if not os.path.exists(self.dataset_json_file_path):
            raise FileNotFoundError(f"ERROR: dataset.json file not found at '{self.dataset_json_file_path}'!")
        if not os.path.exists(self.processed_models_dir_path):
            raise FileNotFoundError(f"ERROR: processed-models/ directory not found at '{self.processed_models_dir_path}'!")

        print("Loading JSON data...")
        with open(self.dataset_json_file_path) as f:
            dataset_file_data = json.load(f)
        if not dataset_file_data:
            print(f"ERROR: failed loading JSON data from {self.dataset_json_file_path}!")
            sys.exit(0)
        
        self.info = {
            'title': dataset_file_data['title'],
            'version': dataset_file_data['version'],
            'last_updated': dataset_file_data['lastUpdated'],
            'total_models': dataset_file_data['modelCount']
        }
        self.data = pd.DataFrame.from_dict(dataset_file_data['modelInfos'])
        #.set_index('id')

        # verify dataset consistency by couning model directories within processed-models/
        model_dir_count = len([entry for entry in os.listdir(self.processed_models_dir_path) if os.path.isdir(os.path.join(self.processed_models_dir_path, entry))])
        if self.info['total_models'] != model_dir_count:
            print(f"WARNING: dataset is not consistent! Total models {self.info['total_models']} does not match model directory count {model_dir_count}")
        else:
            print("Dataset loaded successfully!")
    
    def to_matrix(self, data: pd.DataFrame):
        return np.asmatrix(data)

    def filter_models(self, id='', name='', source='', repo='', license='', lang='', format='', min_elems=0, max_elems=10000, min_rels=0, max_rels=10000, min_views=0, max_views=500):
        # returns a filtered copy of the dataframe
        
        df = copy.deepcopy(self.data)
        
        if id != '':
            df = df[df['id'].str.contains(id)]
        if name != '':
            df = df[df['name'].str.contains(name)]
        if source != '':
            df = df[df['source'].str.lower() == source.lower()]
        if repo != '':
            df = df[df['repository'].str.contains(repo)]
        if license != '':
            df = df[df['license'] == license]
        if format != '':
            df = df[df.formats.apply(lambda x: format in x)]
        if lang != '':
            df = df[df['language'] == lang]

        # TODO: tags, duplicates

        if min_elems > 0:
            df = df[df['elementCount'] >= min_elems]
        if max_elems < 10000:
            df = df[df['elementCount'] <= max_elems]
        if min_rels > 0:
            df = df[df['relationshipCount'] >= min_rels]
        if max_rels < 10000:
            df = df[df['relationshipCount'] <= max_rels]
        if min_views > 0:
            df = df[df['viewCount'] >= min_views]
        if max_views < 500:
            df = df[df['viewCount'] <= max_views]

        return df

    def get_model(self, id: str):
        if not isinstance(id, str) or not id:
            raise ValueError('id must be a non-empty string')
        if id not in self.data['id'].values:
            print(f"Model ID '{id}' not found.")
            return None
        
        # get model.json from model directory and verify that dir and file exists
        model_dir = os.path.join(self.processed_models_dir_path, id)
        if not os.path.exists(model_dir):
            print(f"ERROR: model ID '{id}' found, but does not exist in dataset!")
            return None
        model_json_file = os.path.join(model_dir, MODEL_FILE_JSON)
        if not os.path.exists(model_json_file):
            print("ERROR: JSON file not found for model!")
            return None
        
        with open(model_json_file) as f:
            return json.load(f)

    def get_csv_model(self, id: str) -> dict:
        if not isinstance(id, str) or not id:
            raise ValueError('id must be a non-empty string')
        if id not in self.data['id'].values:
            print(f"Model ID '{id}' not found.")
            return {}
        
        model_dir = os.path.join(self.processed_models_dir_path, id)
        if not os.path.exists(model_dir):
            print(f"ERROR: model ID '{id}' found, but does not exist in dataset!")
            return {}
        model_csv_dir = os.path.join(model_dir, 'csv')
        if not os.path.exists(model_csv_dir):
            print(f"ERROR: csv/ directory does not exists for model with '{id}'!")
            return {}
        
        elements_csv = os.path.join(model_csv_dir, 'elements.csv')
        relations_csv = os.path.join(model_csv_dir, 'relations.csv')
        properties_csv = os.path.join(model_csv_dir, 'properties.csv')
        if not os.path.exists(elements_csv) or not os.path.exists(relations_csv) or not os.path.exists(properties_csv):
            print("ERROR: CSV not exported correctly!")
            return {}
        
        return {
            'elements': pd.read_csv(open(elements_csv, 'r')),
            'relations': pd.read_csv(open(relations_csv, 'r')),
            'properties': pd.read_csv(open(properties_csv, 'r'))
        }

    # TODO
    # def get_xml_model(self, id: str) -> dict:

    @staticmethod
    def _get_file_from_zip(zip_file, file_name, format):
        # currently unused
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

'''
# if __name__ == "__main__":
    
    # 1 - LOAD DATASET
    # dataset = EAModelSet()
    # print(dataset.info)
    # {'title': 'EA ModelSet', 'version': '0.0.1', 'last_updated': '30-06-2023', 'total_models': 1009}


    # 2 - PANDAS DATAFRAME
    # print(dataset.data)
    # print(dataset.data.columns)
    # prints pandas dataframe

    # 3 - NUMPY MATRIX
    # print(dataset.to_matrix(dataset.data))
    # numpy matrix
    
    # 4 - FILTER MODELS
    # models = dataset.filter_models(id='id-', source="github", lang="en", format='CSV')
    # models = dataset.filter_models(min_views=300)
    # print(models)
    # models = dataset.filter_models(name='archi', source="github", lang="en", format='CSV')
    # print(len(models))

    # models2 = dataset.find_models(lang="en", min_elems=1000)
    # print(len(models2))

    # 5 - GET MODEL (JSON)
    #example = dataset.get_model(id="id-54c7dff1caa743febe6d27e02ae711df")
    #print(example)


    # 6 - GET CSV FROM MODEL
    # csv_files = dataset.get_csv_model('id-54c7dff1caa743febe6d27e02ae711df')
    # print(csv_files)
    #print(csv_files['elements'])

    # for m in models2: print(m['name'])

    # get all models
    # models3 = dataset.find_models()
    # print(len(models3))
'''