import typer

FILE_ARGUMENT = typer.Argument(exists=True, file_okay=True, dir_okay=False, writable=True, readable=True, resolve_path=True)
DIR_ARGUMENT = typer.Argument(exists=True, file_okay=False, dir_okay=True, writable=True, readable=True, resolve_path=True)
