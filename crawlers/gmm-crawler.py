import requests
from rich.console import Console

console = Console()
err_console = Console(stderr=True, style='bold red')

API_URL = 'https://app.genmymodel.com/api/projects/public?type=ARCHIMATE&minDataSize=10000'

def get_archimate_projects() -> list[str]:
    project_ids = []
    params = { 'limit': 20, 'page': 0 }

    while True:
        response = requests.get(API_URL, params=params)
        if response.status_code != 200:
            err_console.print("Failed to fetch data: HTTP ", response.status_code)
            break
        
        data = response.json()
        console.print(data.get('pageNumber'))
        #console.print(data)
        for element in data.get('elements', []):
            if element.get('type') == 'ARCHIMATE':
                project_ids.append(element.get('projectId'))

        next_page_link = next((link for link in data.get('links', []) if link['rel'] == 'next'), None)
        if not next_page_link:
            break
        
        if params['page'] == 3:
            break
        params = {'limit': 20, 'page': params['page'] + 1}
    return project_ids

def main():
    console.print('--- EA ModelSet GenMyModel Crawler ---', style='cyan bold')
    
    project_ids = get_archimate_projects()
    console.print(project_ids)

    # TODO: Get XML model
    # https://app.genmymodel.com/api/projects/<project_id>/archimate


if __name__ == "__main__":
    main()