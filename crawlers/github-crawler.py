import json
import os
import time
import requests
from rich.console import Console
from rich.progress import track
from rich.progress import Progress
import xml.etree.ElementTree as ET

# GitHub Authentication Token
AUTH_TOKEN = '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'

ARCHI_QUERY = 'archimate:model+extension:archimate'
XML_QUERY = 'model xmlns=\"http://www.opengroup.org/xsd/archimate+extension:xml'

DATASET_DIR = '../dataset/'
DATASET_FILE = DATASET_DIR + 'dataset.json'

NEW_MODELS_FILE = 'github-models.json'
MODELS_OUTPUT_DIR = './download/github'

WAIT_TIME = 60

console = Console()
err_console = Console(stderr=True, style='bold red')

def handle_rate_limit(progress: Progress):
    console.print("Rate limit reached, waiting for 60 seconds:", style='#FFA500')
    wait_task = progress.add_task("[orange]Waiting..", total=WAIT_TIME)
    for _ in range(WAIT_TIME):
        time.sleep(1)
        progress.update(wait_task, advance=1)

def get_response(query: str, page: int, per_page: int) -> requests.Response:
    url = f"https://api.github.com/search/code?q={query}"
    headers = {
        "Accept": "application/vnd.github.+json",
        "Authorization": f"Bearer {AUTH_TOKEN}"
    }
    params = { 
        "per_page": per_page, 
        "page": page 
    }
    response = requests.get(url, headers=headers, params=params)
    return response

def search_github(query: str) -> list:
    page = 0
    result = []
    total_count = 0

    console.print(f"Crawling with query [bold cyan]'{query}'[/bold cyan]:")
    with Progress(console=console) as progress:
        task = progress.add_task("[cyan]Crawling...", total=None)
        
        while True:
            response = get_response(query, page, 100)
            
            if response.status_code == 200:
                if page == 0:
                    total_count = response.json().get('total_count')
                    console.print(f"Models found: {total_count}")
                    progress.update(task, total=total_count)
               
                items = response.json().get("items", [])
                if items and len(items) > 0:
                    # print(f"Fetched page {page} with {len(items)} items.")
                    result.extend(items)
                    page += 1
                    progress.update(task, advance=len(items))
                else:
                    break

            # handle rate limit
            elif response.status_code == 403:
                handle_rate_limit(progress)
            
            # handle last page 
            elif response.status_code == 422 and total_count > 0:
                response = get_response(query, page, total_count % 100)
                
                if response.status_code == 200:
                    remaining_items = response.json().get("items", [])
                    if remaining_items and len(remaining_items) > 0:
                        print(f"Fetched page {page} with {len(remaining_items)} items.")
                        result.extend(remaining_items)
                        progress.update(task, advance=len(remaining_items))
                        break
                elif response.status_code == 403:
                    handle_rate_limit(progress)
                else:
                    console.print("No more pages found.")
                    break
            else:
                err_console.print(f"Failed to fetch results! Status code: {response.status_code}")
                break
    return result

def is_valid_url(url: str) -> bool:
    filtered_url_prefixes = (
        'https://github.com/me-big-tuwien-ac-at/EAModelSet/',
        'https://github.com/borkdominik/CM2KG/',
    )
    if any(url.startswith(prefix) for prefix in filtered_url_prefixes):
        return False
    if not any(url.endswith(extension) for extension in ['archimate', 'xml']):
        return False
    return True

def convert_url(url: str) -> str:
    return url.replace('https://github.com/', 'https://raw.githubusercontent.com/').replace('/blob/', '/')

def fetch_url(url: str) -> (tuple[requests.Response, None] | tuple[None, str]):
    with requests.Session() as session:
        try:
            response = session.get(url)
            response.raise_for_status()
            return response, None
        except requests.HTTPError as e:
            return None, f"HTTP error for {url}: {e}"
        except ET.ParseError as e:
            return None, f"XML parsing error for {url}: {e}"

def normalize_model_id(model_id: str) -> str:
    # strips common prefixes from the model ID
    for prefix in ['__', '_', 'id-']:
        if model_id.startswith(prefix):
            return model_id[len(prefix):]
    return model_id

def store_model(response: requests.Response, html_url: str, model_ids: set[str]) -> (str | None):
    try:
        root = ET.fromstring(response.text)
    except ET.ParseError as e:
        err_console.print(f"XML parsing error for {html_url}: {e}")
        return None
    
    model_id = root.attrib.get('identifier') if html_url.endswith('xml') else root.attrib.get('id')
    if not model_id:
        err_console.print(f"Could not find ID attribute in model from '{html_url}'")
        return None
    
    normalized_id = normalize_model_id(model_id)
    if normalized_id in model_ids:
        return None

    filename = f"{model_id}.xml" if html_url.endswith('xml') else f"{model_id}.archimate"
    model_file_path = os.path.join(MODELS_OUTPUT_DIR, filename)
    with open(model_file_path, "w") as file:
        file.write(response.text)

    return {
        'url': html_url,
        'model_id': model_id,
        'model_file': model_file_path
    }

def main():
    data = search_github(ARCHI_QUERY) + search_github(XML_QUERY)

    try:
        with open(DATASET_FILE, "r") as dataset_file:
            dataset = json.load(dataset_file)
    except FileNotFoundError:
        err_console.print(f"Dataset file not found at '{DATASET_FILE}'!")
        return
    except json.JSONDecodeError:
        err_console.print(f"Error decoding JSON from dataset file at '{DATASET_FILE}'!")
        return

    if not os.path.exists(MODELS_OUTPUT_DIR):
        os.makedirs(MODELS_OUTPUT_DIR)
    console.print(f"Storing new models in directory [bold cyan]'{MODELS_OUTPUT_DIR}'[/bold cyan]\n")

    existing_model_ids = { normalize_model_id(m['id']) for m in dataset['modelInfos'] }
    new_models = []

    console.print('Filtering and downloading crawled models:', style='cyan bold')
    for item in track(data, description="Processing..."):
        # url format: https://github.com/user/repo/blob/path/to/file
        html_url = item['html_url'] 
        if not is_valid_url(html_url):
            continue
        
        # Convert to https://raw.githubusercontent.com/* and fetch file content
        raw_url = convert_url(html_url)
        response, error = fetch_url(raw_url)
        if error:
            continue
        
        model = store_model(response, html_url, existing_model_ids)
        if model is not None:
            new_models.append(model)

    console.print('Filtering finished!\n', style='bold green')

    with open(NEW_MODELS_FILE, "w") as outfile:
        json.dump(new_models, outfile)
        console.print(f"See output in file [bold cyan]'{NEW_MODELS_FILE}'[/bold cyan].")

if __name__ == "__main__":
    main()
