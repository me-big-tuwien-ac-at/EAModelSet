from eamodelset.gui import home_page, theme
from nicegui import ui

@ui.page('/')
def index_page() -> None:
    with theme.frame('Homepage'):
        home_page.content()

ui.run(title='EA ModelSet GUI')