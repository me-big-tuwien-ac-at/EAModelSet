# EA ModelSet CLI

Work in progress...

## Build

From the `python-app/eamodelset/` directory execute:

```bash
poetry shell
poetry install
```

Run tests:

```bash
poetry run pytest
```

Generate Documentation:

```bash
typer eamodelset.cli utils docs --output DOCS.md --name eamodelset
```


## Commands

### Init

```bash
eamodelset init ../dataset
```

### Transform

```bash
eamodelset transform --help

# ---------------------
# 1) ARCHI Input Format
# ---------------------
# 1.1) ARCHI -> JSON
eamodelset transform ../../test/models/Simple.archimate archi ../../test/output.json json -d
# 1.2) ARCHI -> XML
eamodelset transform ../../test/models/Simple.archimate archi ../../test/output.xml xml -d
# 1.3) ARCHI -> CSV
eamodelset transform ../../test/models/Simple.archimate archi ../../test/ csv -d

# ---------------------
# 2) XML Input Format
# ---------------------
# TODO
```