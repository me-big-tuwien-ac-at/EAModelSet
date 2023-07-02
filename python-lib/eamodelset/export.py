import argparse, shutil, os
from zipfile import ZipFile

# ----------------
# currently unused
# ----------------

DATASET_DEFAULT_DIR = '../../../dataset'
PROCESSED_MODELS_DEFAULT_DIR = '/processed-models'

def zip_all():
    shutil.make_archive('../../../test/dataset', 'zip', DATASET_DEFAULT_DIR)
    if os.path.exists('../../../test/dataset.zip'):
        return "Zip file created!"
    else: 
        return "Failed to create zip archive"

def zip_json():
    with ZipFile('../../../test/dataset-json.zip', 'w') as zip_object:
        subdirs = [ f.name for f in os.scandir(DATASET_DEFAULT_DIR + PROCESSED_MODELS_DEFAULT_DIR) if f.is_dir() ]
        for dir in subdirs:
            path = DATASET_DEFAULT_DIR + PROCESSED_MODELS_DEFAULT_DIR + '/' + dir + '/model.json'
            zip_object.write(path, dir + '/model.json')

def zip_xml():
    with ZipFile('../../../test/dataset-xml.zip', 'w') as zip_object:
        subdirs = [ f.name for f in os.scandir(DATASET_DEFAULT_DIR + PROCESSED_MODELS_DEFAULT_DIR) if f.is_dir() ]
        for dir in subdirs:
            path = DATASET_DEFAULT_DIR + PROCESSED_MODELS_DEFAULT_DIR + '/' + dir + '/model.xml'
            zip_object.write(path, dir + '/model.xml')

def zip_archimate():
    with ZipFile('../../../test/dataset-archimate.zip', 'w') as zip_object:
        subdirs = [ f.name for f in os.scandir(DATASET_DEFAULT_DIR + PROCESSED_MODELS_DEFAULT_DIR) if f.is_dir() ]
        for dir in subdirs:
            path = DATASET_DEFAULT_DIR + PROCESSED_MODELS_DEFAULT_DIR + '/' + dir + '/model.archimate'
            if os.path.exists(path):
                zip_object.write(path, dir + '/model.archimate')

def zip_csv():
    with ZipFile('../../../test/dataset-csv.zip', 'w') as zip_object:
        subdirs = [ f.name for f in os.scandir(DATASET_DEFAULT_DIR + PROCESSED_MODELS_DEFAULT_DIR) if f.is_dir() ]
        for dir in subdirs:
            csv_path = DATASET_DEFAULT_DIR + PROCESSED_MODELS_DEFAULT_DIR + '/' + dir + '/csv'
            if os.path.exists(csv_path):
                zip_object.write(csv_path + '/elements.csv', dir + '/csv/elements.csv')
                zip_object.write(csv_path + '/relations.csv', dir + '/csv/relations.csv')
                zip_object.write(csv_path + '/properties.csv', dir + '/csv/properties.csv')
            

def main():
    parser = argparse.ArgumentParser(description='EAModelSet CLI - Export')
    parser.add_argument('zip', choices=['all', 'json', 'xml', 'archimate', 'csv'],
                        help='Create ZIP archive')
    args = parser.parse_args()
    result = None
    if args.zip == 'all':
        result = zip_all()
    if args.zip == 'json':
        result = zip_json()
    if args.zip == 'xml':
        result = zip_xml()
    if args.zip == 'archimate':
        result = zip_archimate()
    if args.zip == 'csv':
        result = zip_csv()

    print(result)

if __name__ == '__main__':
    main()