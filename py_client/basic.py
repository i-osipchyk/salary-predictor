import requests

endpoint = "http://localhost:8000/" #"http://127.0.0.1:8000/"

print(requests.get(endpoint).text)
print(requests.get(endpoint).status_code)