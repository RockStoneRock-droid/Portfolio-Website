import nltk
from nltk.stem.porter import PorterStemmer
stemmer = PorterStemmer()

#RUN ALL CODE IN CMD

def tokenize(sentence):
    return nltk.word_tokenize(sentence)

def stem(word):
    return stemmer.stem(word.lower()) 

def bag_of_words(tokenized_sentence, all_words):
    pass

words = ["Organize", "organizes", "organizing"]
stemmed_words = [stem(w) for w in words]
print(stemmed_words)
