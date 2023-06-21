# EAModelSet
This repository features a set of EA models and the supporting applications to transform, analyze, and query the model set.


## Schema

### Model

| Name | Description | Data Type | Cardinality | Example Value |
|---|---|---|---|---|
| `id` | Unique identifier of the model | string |  exactly 1 |   |
| `name` | Name of the model  | string | exactly 1 |   |
| `documentation` | Additional information about the model (e.g., description, purpose)  | string | 0 or 1 |   |
| `file` | Relative file path of the parsed model file | string | exactly 1 |   |
| `format` | Format of the source file (i.e., file extension) | string | exactly 1 |   |
| `source` | Source of the model | string | 0 or 1 |   |
| `timestamp` |  | date | exactly 1 |   |
| `tags` |  | `string[]` | 0 or more |   |
| `archiVersion` |  | `string` | 0 or 1 |   |
| `language` |  | `string` | 0 or 1 |   |

### Element

| Name | Description | Data Type | Cardinality | Example Value |
|---|---|---|---|---|
| `id` | Unique identifier of the element | string |  exactly 1 |   |
| `name` | Name of the element  | string | exactly 1 |   |
| `documentation` | Additional information about the model (i.e. description, purpose)  | string | 0 or 1 |   |
| `type` | Element type | string | exactly 1 |   |
| `layer` | Layer of the element (computed through type) | string | exactly 1 |   |

### Relationship

| Name | Description | Data Type | Cardinality | Example Value |
|---|---|---|---|---|
| `id` | Unique identifier of the relationship | string |  exactly 1 (required) |   |
| `sourceId` | ID of the source element | string | exactly 1  (required) |  |
| `targetId` | ID of the target element | string | exactly 1 (required) |  |
| `type` | Relationship type | string | exactly 1 | |
| `name` |  | string | 0 or 1 |   |
| `documentation` | Additional information about the relationship | string | 0 or 1 (optional) |   |


### View

| Name | Description | Data Type | Cardinality | Example Value |
|---|---|---|---|---|
| `id` | Unique identifier of the view | string |  exactly 1 |   |
| `name` | Name of the element  | string | exactly 1 |   |
| `viewpoint` |  | string | 0 or 1 |   |
| `documentation` | | string | 0 or 1 |   |