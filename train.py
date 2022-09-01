import json # imports json
from nltk_utils import tokenize, stem, bag_of_words 
import numpy as np

import torch
import torch.nn as nn
from torch.utils.data import Dataset
from torch.utils.data import DataLoader

from model import NeuralNet

with open('intents.json', 'r') as f: # loads the intents.json file
    intents = json.load(f) # stores all of the intent.json data in the intents variable

all_words = [] # holds words
tags = [] # holds tags
xy = [] # holds tags and tokenized pattern
for intent in intents['intents']: # loops over all the data in intents.json, 'intents' refers to the json file
    tag = intent['tag'] # stores all the tags in the json file
    tags.append(tag) # adds tags to tags array
    for pattern in intent['patterns']: # loops over all the patterns in intents.json
        w = tokenize(pattern) # tokenizes the pattern
        all_words.extend(w) # extends the array and adds the tokenized pattern
        xy.append((w, tag)) # appends the tag and the tokenized pattern to xy

ignore_words = ['?', '!', '.', ','] # What to ignore in the sentences
all_words = [stem(w) for w in all_words if w not in ignore_words] # Grabs the stem of all the words ignoring everything in ignore_words
all_words = sorted(set(all_words)) # sorts all the words
tags  = sorted(set(tags)) # sorts all the tags

X_train = [] # all the bag of words are stored in X_train
Y_train = []
for (pattern_sentence, tag) in xy: # loops through xy variable
    bag = bag_of_words(pattern_sentence, all_words) # creates a new bag of words
    X_train.append(bag)

    label = tags.index(tag)
    Y_train.append(label) # stores the index of the labels in the array, Ex. 0 for first label, 1 for second label etc..

X_train = np.array(X_train) # stores as numpy array
Y_train = np.array(Y_train) # stores as numpy array

class ChatDataset(Dataset):
    def __init__(self):
        self.n_samples = len(X_train)
        self.x_data = X_train
        self.y_data = Y_train

    # dataset[indx]
    def __getitem__(self, index):
        return self.x_data[index], self.y_data[index]

    def __len__(self):
        return self.n_samples

# Hyperparameters
batch_size = 8
hidden_size = 8
output_size = len(tags)
input_size = len(X_train[0]) # all bags of words have the same size so the input size is the length of the bag of words
learning_rate = .001
num_epochs = 1000

dataset = ChatDataset()
train_loader = DataLoader(dataset=dataset, batch_size=batch_size, shuffle=True, num_workers=0)

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = NeuralNet(input_size, hidden_size, output_size).to(device)

# Loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

# Train the model
for epoch in range(num_epochs):
    for (words, labels) in train_loader:
        words = words.to(device)
        labels = labels.to(dtype=torch.long).to(device)
        
        # Forward pass
        outputs = model(words)
        # if y would be one-hot, we must apply
        # labels = torch.max(labels, 1)[1]
        loss = criterion(outputs, labels)
        
        # Backward and optimize
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        
    if (epoch+1) % 100 == 0:
        print (f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

print(f'final loss, loss={loss.item():.4f}')

# data directory stores everything from the training program and pipeline
data = {
    "model_state": model.state_dict(),
    "input_size": input_size,
    "output_size": output_size,
    "hidden_size": hidden_size,
    "all_words": all_words,
    "tags": tags
}

FILE = "data.pth" # creates a pytorch file
torch.save(data, FILE) # saves the file

print(f"training complete. file saved to {FILE}")

# If you change intents.json you must run the trainer afterwards








