from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource): # HelloWorld Resource
    def get(self): # Handles get request
        return {"data": "Hello World"} # Must return values in JSON format
    
    def post(self):
        return {"data": "Posted"}

api.add_resource(HelloWorld, "/helloworld") # Adds resource to api

if __name__ == "__main__":
    app.run(debug=True) # only run true in testing environment


# To run API type python main.py in the console
# To run test file type python test.py in the console


