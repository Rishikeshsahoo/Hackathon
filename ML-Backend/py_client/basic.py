import requests

endpoint = "https://httpbin.org/status/200"
endpoint = "http://localhost:8000/api/"

get_response = requests.get(endpoint)
print(get_response.json()['message'])