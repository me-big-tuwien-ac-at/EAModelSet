# EA ModelSet JSON Schemas

> ⚠️ Work in Progress

EA ModelSet uses two different JSON schemas:

1. **Dataset Schema** `dataset.schema.json` - contains metadata about the dataset itself and brief information about the included models.
2. **Model Schema** `archimate-model.schema.json` - contains a concrete ArchiMate EA model with its metadata, annotations, elements, relationships and views.


### 1. Dataset

<details>
<summary>Example</summary>

```json
{
    "title": "EA ModelSet",
    "version": "0.0.1",
    "lastUpdated": "30-06-2023",
    "modelCount": 1009,
    "modelInfos": [
        {
            "id": "id-48fb3807bfa249a9bae607b6a92cc390",
            "name": "LAE",
            "source": "GitHub",
            "language": "fr",
            "formats": [
                "XML",
                "CSV",
                "JSON",
                "ARCHIMATE"
            ],
            "tags": [],
            "duplicateCount": 0,
            "elementCount": 142,
            "relationshipCount": 296,
            "viewCount": 24
        },
    ]
}
```
</details>

<details>
<summary>Schema Documentation</summary>

#### Dataset

| Name | Description | Data Type | Cardinality | Example Value |
|---|---|---|---|---|
| **`title`** | Title of the dataset | string |  1 | `"EA ModelSet"` |
| **`version`** | Current version of the dataset | string | 1 | `"0.0.1"` |
| **`lastUpdated`** | Date when the dataset was last updated | date | 1 |  `"27-06-2023"` |
| **`modelCount`** | Amount of models included in the dataset | number | 1 |  `1085` |
| **`modelInfos`** | List of models included in the dataset with brief information  | list of  object | 1 | `[]`  |


#### ModelInfo

| Name | Description | Data Type | Cardinality | Example Value |
|---|---|---|---|---|
| **`id`** | ArchiMate ID of the Model | string |  1 | `"id-1234"` |
| **`name`** | Name of the model | string | 1 | `"ArchiSurance"` |
| **`source`** | Source where the model was downloaded from | string | 1 |  `"GitHub"` |
| **`availableFormats`** | List of available storage formats of the model | list of string | 1 |  `[ "JSON", "XML", "ARCHIMATE", "CSV"]` |
| **`tags`** | Additional tags to classify the model  | list of  string | 1 | `[ "DUPLICATE" ]`  |
| **`duplicateCount`** | Amount of duplicates associated with the model  | number | 1 | `1`  |
| **`elementCount`** | Amount of elements in the model  | number | 1 | `51`  |
| **`relationshipsCount`** | Amount of relationships in the model  | number | 1 | `17`  |
| **`viewsCount`** | Amount of views in the model  | number | 1 | `3`  |

</details>

### 2. Model

<details>
<summary>Example</summary>

```json
{
    "identifier": "https://me.big.tuwien.ac.at/EAModelSet/id-54c7dff1caa743febe6d27e02ae711df",
    "archimateId": "id-54c7dff1caa743febe6d27e02ae711df",
    "name": "Example",
    "description": "Some text describing the purpose, scope and focus of the model.",
    "formats": [
        "XML",
        "CSV",
        "JSON",
        "ARCHIMATE"
    ],
    "source": "Unknown",
    "sourceFile": "raw-data/test/example.xml",
    "sourceFormat": "XML",
    "timestamp": "29-06-2023 09:24:26",
    "tags": [
        "DUPLICATE"
    ],
    "duplicates": [
        "raw-data/test/example.archimate"
    ],
    "language": "en",
    "elements": [
        {
            "id": "id-ac897c7caaec4dd9abe07ff9a0a5236e",
            "name": "Pay",
            "type": "BusinessProcess",
            "layer": "business"
        },
        {
            "id": "id-b521eb69473f4a96b86a9a5f17973198",
            "name": "Claims Payment",
            "type": "BusinessService",
            "layer": "business"
        }
    ],
    "relationships": [
        {
            "id": "id-e9cef967dda44feca72826f78786188c",
            "sourceId": "id-ac897c7caaec4dd9abe07ff9a0a5236e",
            "targetId": "id-b521eb69473f4a96b86a9a5f17973198",
            "type": "Realization"
        },
    ],
    "views": [
        {
            "id": "id-99975bec9b1f4b9384e2d873dc5d4fa0",
            "name": "Default View",
            "viewpoint": ""
        }
    ]
}
```
</details>

<details>
<summary>Schema Documentation</summary>

#### Model

| Name | Description | Data Type | Cardinality | Example Value |
|---|---|---|---|---|
| **`identifier`** | Unique identifier of the model | string |  1 |  `"me.big.tuwien.ac.at/EAModelSet/id-1234"` |
| **`archimateId`** | ArchiMate ID of the Model | string |  1 |  `"id-1234"` |
| **`name`** | Name of the model  | string | 1 | `"ArchiSurance"`  |
| **`documentation`** | Additional information about the model (e.g., description, purpose)  | string | 1 |  `""` |
| **`availableFormats`** | List of available storage formats of the model | list of string | 1 |  `[ "JSON", "XML", "ARCHIMATE", "CSV"]` |
| **`source`** | Source where the model was downloaded from | string | 1 |  `"GitHub"` |
| **`sourceFile`** | Relative file path of the parsed model file | string | 1 | `raw-data/github/archimate/id-1234.archimate`  |
| **`timestamp`** | Date when the model was added to the dataset | date | 1 |  `"25-06-2023 05:55:08"` |
| **`tags`** | Additional tags to classify the model  | list of  string | 1 | `[ "DUPLICATE" ]`  |
| **`duplicates`** | List of duplicate models with references to their files in `raw-data/`  | list of string | 1 | `[]` |
| **`language`** | Language of the model (if known) | `string` | 0 or 1 | `en` |

#### Element

| Name | Description | Data Type | Cardinality | Example Value |
|---|---|---|---|---|
| `id` | Unique identifier of the element | string |  exactly 1 |   |
| `name` | Name of the element  | string | exactly 1 |   |
| `documentation` | Additional information about the model (i.e. description, purpose)  | string | 0 or 1 |   |
| `type` | Element type | string | exactly 1 |   |
| `layer` | Layer of the element (computed through type) | string | exactly 1 |   |

#### Relationship

| Name | Description | Data Type | Cardinality | Example Value |
|---|---|---|---|---|
| `id` | Unique identifier of the relationship | string |  exactly 1 (required) |   |
| `sourceId` | ID of the source element | string | exactly 1  (required) |  |
| `targetId` | ID of the target element | string | exactly 1 (required) |  |
| `type` | Relationship type | string | exactly 1 | |
| `name` |  | string | 0 or 1 |   |
| `documentation` | Additional information about the relationship | string | 0 or 1 (optional) |   |

#### View

| Name | Description | Data Type | Cardinality | Example Value |
|---|---|---|---|---|
| `id` | Unique identifier of the view | string |  exactly 1 |   |
| `name` | Name of the element  | string | exactly 1 |   |
| `viewpoint` |  | string | 0 or 1 |   |
| `documentation` | | string | 0 or 1 |   |

</details>