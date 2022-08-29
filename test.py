import requests 

BASE = "http://127.0.0.1:5000/" # Local Host Address for API

response = requests.get(BASE + "helloworld/What is your favorite color?/") # calls function helloworld with tim as the name parameter
print(response.json())