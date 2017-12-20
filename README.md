
# Capstone Project: Conceptualizer and Categorizer
## Team members:
### Michael Ciminesi (Project Manager)
### Simon Li
### Eric Chiu
### Brian Shi

## Resources:

### Git: https://www.atlassian.com/git/tutorials/comparing-workflows
### Enron data set: https://www.cs.cmu.edu/~./enron/
### Enron scandal info: https://en.wikipedia.org/wiki/Enron_scandal

## Build instructions for Python functionality

heroku buildpacks:add heroku/python
heroku config:set PYTHONHASHSEED=0
heroku ps:scale web=1 		(after push)