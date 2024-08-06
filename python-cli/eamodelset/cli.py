import subprocess
import typer
from typing import Optional

from eamodelset import __app_name__, __version__
from eamodelset.commands.init import init
from eamodelset.commands.list import list_models
from eamodelset.commands.add import add_model
from eamodelset.commands.gui import start_gui
from eamodelset.commands.transform import transform, batch_transform
from eamodelset.common.utils import log_info, display_panel

# initialize CLI
app = typer.Typer(no_args_is_help=True)

# register commands
app.command(name="init")(init)
app.command(name="list")(list_models)
app.command(name="transform")(transform)
app.command(name="batch-transform")(batch_transform)
app.command(name="gui")(start_gui)
app.command(name="add")(add_model)

def _version_callback(value: bool) -> None:
    if value:
        log_info(f"{__app_name__} v{__version__}")
        raise typer.Exit()

@app.callback()
def main(
    version: Optional[bool] = typer.Option(
        None,
        "--version",
        "-v",
        help="Show the application's version and exit.",
        callback=_version_callback,
        is_eager=True,
    )
) -> None:
    return
