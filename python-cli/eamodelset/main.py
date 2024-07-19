import typer
from enum import Enum
from rich import print
from pathlib import Path
from typing_extensions import Annotated

from eamodelset.commands.transform import transform

app = typer.Typer()
app.command(name="transform")(transform)

# add
# remove
# validate
# extract
# archive

@app.callback()
def callback():
    """
    EA ModelSet CLI
    """