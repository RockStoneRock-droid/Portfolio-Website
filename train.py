import json # imports json
from nltk_utils import tokenize, stem, bag_of_words 
import numpy as np

import torch
import torch.nn as nn
from torch.utils.data import Dataset
from torch.utils.data import DataLoader

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

dataset = ChatDataset()
train_loader = DataLoader(dataset=dataset, batch_size=batch_size, shuffle=True, num_workers=0)




