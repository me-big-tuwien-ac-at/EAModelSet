# Crawlers

- [X] GitHub Crawler
- [ ] GenMyModel Crawler

## Getting Started

Install required packages from `requirements.txt`:

```bash
pip install -r requirements.txt
```

Enter your [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) in the file `github-crawler.py`:

```python
# Insert GitHub Authentication Token here
AUTH_TOKEN = ''
```

Start the crawler:

```bash
python github-crawler.py
```

After the crawler is finished, new models can be found in the file `github-models.json`, with each new model having the form of:

```json
{
    "url": "https://github.com/user/repo/blob/path/to/model-file",
    "model_id": "id-abc",
    "model_file": "./download/github/id-abc.archimate"
}
```