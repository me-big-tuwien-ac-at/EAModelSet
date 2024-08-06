from nicegui import ui

def content() -> None:
    ui.label('This is the home page.').classes('text-h4 text-grey-8').classes('font-bold')
    ui.label('Use the menu on the top right to navigate.')