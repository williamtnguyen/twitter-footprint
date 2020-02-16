import sys, json
import twitterscraper as ts
import requests
from bs4 import BeautifulSoup

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def main():
    lines = read_in()
    info = ts.query_user_info(user=lines)
    print(info.tweets)

if __name__ == '__main__':
    main()    
