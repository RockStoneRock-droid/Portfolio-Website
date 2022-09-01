import nltk
from nltk.stem.porter import PorterStemmer
import numpy as np 
stemmer = PorterStemmer()

#RUN ALL CODE IN CMD

def tokenize(sentence): # tokenizes the words: separates the words into individual strings from sentences
    return nltk.word_tokenize(sentence)

def stem(word): # grabs the stem of all the words
    return stemmer.stem(word.lower()) 

def bag_of_words(tokenized_sentence, all_words): # sorts the words and gives them numbers 0 and 1, 1 if they match input and 0 if they do not
    '''
    bag_of_words description, this is what the function does

    For each word in the sentence if there is a word available in the words array we assign a 1 in the bag array

    sentence  = ["hello", "how", "are", "you"]  
    words = ["hi", "hello", "I", "you", "bye", "thank", "cool"] 
    bag = [    0,     1,      0,   1,      0,      0,      0] 

    '''

    # stem each word
    sentence_words = [stem(word) for word in tokenized_sentence]
    # initialize bag with 0 for each word
    bag = np.zeros(len(all_words), dtype=np.float32)
    for idx, w in enumerate(all_words):
        if w in sentence_words: 
            bag[idx] = 1

    return bag


#25:25


