# EA ModelSet

This repository features a dataset of EA models and the supporting applications to transform, analyze, and query the dataset.

<!-- 
**Repository Structure**

| Directory | Description  |
|---|---|
|  `cli-app/` | Java Command Line Interface (CLI) for modifying, analyzing, and managing the dataset  |
| `dataset/` | Contains the dataset with the main `dataset.json` file and the processed model directories organized by their ID |
|  `python-lib/` |  Library to access the dataset in a Python environment. Also contains a usage example in [Juypter notebook]() |
| `raw-data/` | Collection of downloaded EA models organized by their source |
| `schemas/` | (https://github.com/me-big-tuwien-ac-at/EAModelSet/tree/main/schemas) | Contains the JSON schemas for the [Dataset](https://github.com/me-big-tuwien-ac-at/EAModelSet/blob/main/schemas/dataset.schema.json) and [EA Models](https://github.com/me-big-tuwien-ac-at/EAModelSet/blob/main/schemas/ea-model.schema.json).  |
|  `vue-website/` |  Contains the EA ModelSet website (made with Vue3 + GitHub Pages) |

-->


## Dataset

The dataset currently features 863 different EA models in `.json`, `.xml` (The Open Group Standard ArchiMate Model Exchange File Format), `.archimate` ([Archi](https://www.archimatetool.com/)-specific XML model storage format) and `.csv` format.

### Download & Usage

- [Download](https://github.com/me-big-tuwien-ac-at/EAModelSet/releases) the latest version of the dataset as a `.zip` archive
- [Website](https://me-big-tuwien-ac-at.github.io/EAModelSet) with the dataset's landing page, search functionality, and statistics.
- [Python Library](https://github.com/me-big-tuwien-ac-at/EAModelSet/tree/main/python-lib) to access the dataset in a Python environment


### Schema & Structure

EA ModelSet follows a defined structure and leverages JSON schemas to provide a FAIR dataset of EA models. The main directory for the dataset is the `dataset/` directory, which contains the `dataset.json` and `processed-models/` sub-directory. 


*Dataset Directory Structure:*
```
dataset/
|    dataset.json
+--- processed-models/
	+--- <id>/
	+--- <id>/
	...
```

The `dataset.json` files adheres to the `ea-modelset.schema.json` JSON schema and contains the dataset's metadata and an array of *ModelInfo* objects that provide a reduced subset of metadata and
computed properties of each individual model.

Within the `processed-models/` directory, each processed
model has its own sub-directory with the model’s ID serving as the name. 

*Model Directory Structure:*
```
processed-models/
+--- <model-id>/
    | model.archimate
    | model.json
    | model.xml
    +--- csv/
        | elements.csv
        | relations.csv
        | properties.csv
+--- <model-id>/
        ...
```

A model directory contains the primary JSON model file (`model.json` adhering to `ea-model.schema.json`), two ArchiMate XML model files (`model.archimate` and `model.xml`) and a `csv/` directory with a model’s elements, relationships, and views stored as separate CSV files.


## Contributions

TODO