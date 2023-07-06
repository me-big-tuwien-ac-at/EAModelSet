import datetime
import json
import os
import time
from github import Github
from github import Auth
from github import RateLimitExceededException
from github import UnknownObjectException
from eamodelset.dataset import EAModelSet
import github
import pandas as pd


# ENTER GITHUB TOKEN HERE
AUTH_TOKEN = ""

auth = Auth.Token(AUTH_TOKEN)

g = Github(auth=auth)

def main():
    #files = g.search_code(query="archimate:model extension:archimate name=\"1  bounded context\" id=\"0133f8ac\"")
    #print("   There are " , files.totalCount)
    for f in files:
        name = f.repository.full_name
        repo_lic = f.repository.get_license().license
        print(name)
        print(repo_lic)

if __name__ == "__main__":
    # main()
    dataset = EAModelSet()
    df = dataset.data
    df = df[df['source'].str.lower() == "github"]
    df_reset = df.reset_index(drop=False)
    columns = df_reset.loc[:, ['id', 'name']]
    # print(columns)

    f = open('licenses.json')
    result = json.load(f)
    # print(columns.size)

    for index, row in columns.iterrows():
        id_value = row['id']
        id_exists = False
        for i in result:
            if "id" in i and i['id'] == id_value:
                id_exists = True
        if id_exists == True:
            continue
        
        name_value = row['name']
        print(f"Index: {index}, id: {id_value}, name: {name_value}")
        
        model = dataset.get_model(id_value)
        source_format = model['sourceFormat'].lower();

        files_found = None
        try:
            if source_format == 'archimate':
                files_found = g.search_code(query=f"archimate {id_value}", sort="indexed", highlight=True)
            elif source_format == 'xml':
                files_found = g.search_code(query=f"archimate {id_value}", sort="indexed", highlight=True)
        except RateLimitExceededException:
            print("--- RATE LIMIT EXCEEDED ---")
            # time.sleep(60)
            # limits = g.get_rate_limit()
            # print(limits)
            exit()
            
        
        # print(files_found.totalCount)

        repos = []
        licenses = []
        if (files_found.totalCount > 0):
            for f in files_found:
                repo_name = f.repository.full_name
                if repo_name in repos:
                    continue
                if repo_name == 'borkdominik/CM2KG':
                    repos.append(repo_name)
                    licenses.append("MIT")
                    continue
                repos.append(repo_name)
                lic_name = ""
                try: 
                    lic_name = f.repository.get_license().license.name
                except UnknownObjectException as exception:
                    lic_name = "Not found"
                licenses.append(lic_name)

        
        result.append({
            "id": id_value,
            "name": name_value,
            "repositories": repos,
            "licenses": licenses
        })
        with open("licenses.json", "w") as outfile:
            json.dump(result, outfile)
        # print(result)

    #print(result)  
    
