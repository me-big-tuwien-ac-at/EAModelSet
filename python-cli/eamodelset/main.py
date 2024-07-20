import typer
from typing import Optional

from eamodelset import __app_name__, __version__
from eamodelset.commands.transform import transform

app = typer.Typer(no_args_is_help=True)
app.command(name="transform")(transform)

def _version_callback(value: bool) -> None:
    if value:
        typer.echo(f"{__app_name__} v{__version__}")
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
