from datetime import datetime
from functools import wraps
from rich.console import Console
from rich.panel import Panel
import typer
from eamodelset import dataset, config

console = Console()
err_console = Console(stderr=True, style="bold red")

def log(msg: str, verbose: bool = False):
    if verbose:
        current_time = datetime.now().strftime("%H:%M:%S")
        console.print(f"[dim cyan][{current_time}][/] {msg}")

def log_success(msg: str):
    console.print(f"[bold green][SUCCESS][/] {msg}")

def log_info(msg: str):
    console.print(f"[bold deep_sky_blue1][INFO][/] {msg}")

def log_warning(msg: str):
    console.print(f"[bold yellow][WARNING][/] [yellow]{msg}[/]")

def log_error(msg: str):
    err_console.print(f"[ERROR] {msg}")

def display_panel(msg: str):
    panel = Panel(msg, title="Info", subtitle="End of Message", style="bold green")
    console.print(panel)

def requires_init(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        try:
            dataset_path = config.get_dataset_path()
            if not dataset.validate(dataset_path):
                log_error(f"Invalid dataset at path {dataset_path}.")
                raise typer.Abort()
        except FileNotFoundError:
            log_error("Dataset is not initialized. Please run the 'init' command first.")
            raise typer.Abort()
        return func(*args, **kwargs)
    return wrapper
