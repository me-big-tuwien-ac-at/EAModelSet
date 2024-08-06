import subprocess
from eamodelset.common.utils import requires_init, log_info

@requires_init
def start_gui():
    log_info("Starting GUI...")
    subprocess.run(["python", "eamodelset/gui/main.py"])