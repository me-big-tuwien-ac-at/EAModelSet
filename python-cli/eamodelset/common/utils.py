from datetime import datetime
from rich.console import Console

console = Console()
err_console = Console(stderr=True, style="bold red")

def log(msg: str, verbose: bool = False):
    if verbose:
        current_time = datetime.now().strftime("%H:%M:%S")
        console.print(f"[dim cyan][{current_time}][/] {msg}")

def log_warning(msg: str):
    console.print(f"[bold yellow][WARNING][/] [yellow]{msg}[/]")

def log_error(msg: str):
    err_console.print(f"[ERROR] {msg}")
