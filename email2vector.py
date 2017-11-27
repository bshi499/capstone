import gensim, sys, json, numpy as np
from gensim.models import Word2Vec

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def email2vec(email_contents):
    size = 100
    word_model = gensim.models.Word2Vec(email_contents, min_count=1)
    email_vector = []

    for i in range(0, size):
        total = 0
        for word in email_contents[0]:
            total += word_model[word][i]
        email_vector.append(total / len(word_model.wv.vocab))
    return email_vector

def main():
    lines = read_in()
    np_lines = np.array(lines)
 
    email = [[]]

    for line in np_lines:
        email[0].append(line)

    e2v = email2vec(email)

    print(e2v)


#start process
if __name__ == '__main__':
    main()