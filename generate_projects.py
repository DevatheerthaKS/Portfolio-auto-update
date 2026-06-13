import requests
import json

USERNAME = "DevatheerthaKS"

url = f"https://api.github.com/users/{USERNAME}/repos"

repos = requests.get(url).json()

projects = []

for repo in repos:

    projects.append({
        "name": repo["name"],
        "description": repo["description"],
        "url": repo["html_url"]
    })

with open("projects.json", "w") as file:
    json.dump(projects, file, indent=4)

print("Projects updated successfully")