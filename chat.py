import random
import json

import torch

from model import NeuralNet
from nltk_utils import bag_of_words, tokenize

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('intents.json', 'r') as json_data: # opens intents.json, reads it and stores it in intents variable
    intents = json.load(json_data)

FILE = "data.pth" # gets torch file generated from trainer
data = torch.load(FILE) # loads torch file

# stores all of the data in separate variables from the torch file
input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data['all_words']
tags = data['tags']
model_state = data["model_state"]

model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state) # loads and stores the state of the model
model.eval() # evaluates current model

bot_name = "Chase"

def get_response(msg):
    sentence = tokenize(msg) # tokenizes sentence
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0]) # reshapes X, creates one row and one column
    X = torch.from_numpy(X).to(device) # uses numpy because bag_of_words returns numpy array

    output = model(X) # output equals new model
    _, predicted = torch.max(output, dim=1)

    tag = tags[predicted.item()]

    # Must perform softmax to find probabilities 
    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]
    if prob.item() > 0.75: # checks to see if probability is greater than 75%
        for intent in intents['intents']:
            if tag == intent["tag"]:
                return random.choice(intent['responses']) # grabs a random response from responses in intents.json
    
    return "I do not understand..."


if __name__ == "__main__":
    print("Let's chat! (type 'quit' to exit)")
    while True:
        # sentence = "do you use credit cards?"
        sentence = input("You: ")
        if sentence == "quit": # ends program when user types quit
            break

        resp = get_response(sentence)
        print(resp)




