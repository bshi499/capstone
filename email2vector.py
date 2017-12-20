import gensim, sys, json, numpy as np
from gensim.models import Word2Vec
from gensim.models import Phrases
from gensim.models.phrases import Phraser

# receives the input from Node
def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

# divides the input into sentences by punctuation and determines phrases before returning cleaned input
def punctuation_splitter(document):
    punctuation = ['!', '?', '.', ';']
    temp = document.lower().split(" ")
    result = []
    prev_start = 0
    for i in range(len(temp)):
        final_char = len(temp[i]) - 1
        if temp[i][final_char] in punctuation or i == len(temp)-1:
            line = []
            while prev_start <= i:
                line.append(remove_symbols(temp[prev_start]))
                prev_start += 1
            result.append(line)
    result = email2phrases(result)
    return result
    
# helper function to remove various symbols
def remove_symbols(word):
    temp = word
    symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*',
               '(', ')', '[', ']', '{', '}', '|', '\\', '/' ':', ';',
               '\'', '\"', '?', ',', '<', '>', '.', '+', '-', '=']
    for sym in symbols:
        if sym in temp:
            temp = temp.replace(sym, "")
    return temp

# checks input for certain phrases such as "new york" and concatenates them with underscore into a single word "new_york"
def email2phrases(email_contents):
    phrased_input = []
    bi_gram = Phrases(email_contents, min_count=1, threshold=1)
    bg_phraser = Phraser(bi_gram)
    for sentence in email_contents:
        phrased_input.append(bg_phraser[sentence])
    return phrased_input

# creates vector model on finalized input and then performs averaging operation for each vector dimension of each word
# to return a final vector represenation of the email as a whole
def email2vec(email_contents):
    size = 100
    model = gensim.models.Word2Vec(email_contents, min_count=1, workers=1, seed=1)
    email_vector = []

    word_vectors = model.wv
    del model

    for i in range(0, size):
        total = 0
        for word in word_vectors.vocab:
            total += word_vectors[word][i]
        email_vector.append(total / len(word_vectors.vocab))
    
    return email_vector

def main():
    lines   = read_in()

    email   = punctuation_splitter(lines)
    e2v     = email2vec(email)

    print(e2v)

#start process
if __name__ == '__main__':
    main()