import sys, json
import twitterscraper as ts

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def main():
    lines = read_in()
    info = ts.query_user_info(user=lines)
    print(str(info.tweets) + " " + str(info.full_name) + " " + str(info.followers))

if __name__ == '__main__':
    main()    
