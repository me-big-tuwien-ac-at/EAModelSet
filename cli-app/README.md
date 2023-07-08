# EA ModelSet - CLI App

This directory contains the Java CLI app with various commands related to processing, modifying, querying, and managing the dataset.

## Getting Started

```bash
# create .jar exectuable of the CLI in the target/ directory
mvn compile package

# display available commands
java -jar target/cli-app-0.0.1-SNAPSHOT.jar help

# start interactive shell
java -jar target/cli-app-0.0.1-SNAPSHOT.jar

# execute non-interactive command
java -jar target/cli-app-0.0.1-SNAPSHOT.jar zipDir ../dataset/ ../target.zip 
```

## Available Commands

*Non-interactive Mode* (dataset path has to be passed as argument):

```bash
# add model in Archi storage format
addModelDir /path/to/dataset/ /path/to/model.archimate 

# add model in Model Exchange XML format
addModelDir /path/to/dataset/ /path/to/model.xml 

# remove model folder and its files
removeModelDir /path/to/dataset/ id-1234

# validate the dataset (file structure & schema)
validateDir /path/to/dataset/

# create a zip archive at the provided path
zipDir /path/to/dataset/ /path/to/target.zip 
```

*Interactive Mode* (dataset loaded once):

```bash
# load dataset to enable interactive commands
load /path/to/dataset/

# same commands without `Dir` suffix + dataset path does not have to be passed as argument
addModel /path/to/model.archimate
addModel /path/to/model.xml

removeModel id-1234

validate

zip /path/to/target.zip

# ---------------------------------------------
# commands, only available in interactive mode
# ---------------------------------------------

# update dataset.json file
datasetJson

# create/update dataset_stats.json file
datasetStats
```

Additional:
```bash
# generates a JSON schema based on the Dataset class
genDatasetSchema

# generates a JSON schema based on the ArchimateModel class
genModelSchema
```

