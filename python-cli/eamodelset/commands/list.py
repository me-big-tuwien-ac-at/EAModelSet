from eamodelset import dataset
from eamodelset.dataset import EAModelSet, get_dataset
from rich.table import Table
from rich import print

def list_models() -> None:
    """List all models."""
    dataset = get_dataset()
    # print(dataset.get_model_infos())
    table = Table(title="EA ModelSet")
    table.add_column("Name", justify="right", style="cyan", no_wrap=True)
    table.add_column("Age", style="magenta")
    table.add_column("City", justify="right", style="green")

    table.add_row("Alice", "24", "New York")
    table.add_row("Bob", "19", "Los Angeles")
    table.add_row("Charlie", "32", "Chicago")
    print(table)
