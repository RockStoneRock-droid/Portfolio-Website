from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_restful import Api, Resource
import trainer
app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    user_input = request.json["user_input"]
    return jsonify({'msg':str(trainer.brain(user_input))})

if __name__ == "__main__":
    app.run(debug=True) # only run true in testing environment




