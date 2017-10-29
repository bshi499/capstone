# string_test.py

import gensim, sys, json, numpy as np
from gensim.models import Word2Vec

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def main():
    lines = read_in()

    np_lines = np.array(lines)
    
    sentence = [[]]

    for line in np_lines:
        sentence[0].append(line);

    print(sentence);

    model = gensim.models.Word2Vec(sentence, min_count=1)
    
    for sent in sentence:
        for word in sent:
            print(word)
            print(model[word], '\n')

#start process
if __name__ == '__main__':
    main()