from rich.console import Console
from rich import print

def log(msg: str, console: Console = Console(), verbose: bool = False):
    if verbose:
        console.log(msg)

def print_error(msg: str):
    print(f"[bold red]Error![/bold red] [red]{msg}[/red]")
