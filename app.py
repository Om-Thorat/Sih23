from flask import Flask, send_from_directory, request
import pymongo
import os
from datetime import datetime
app = Flask(__name__)

client = pymongo.MongoClient((os.environ['MONGODB_URI']))
db = client['Track01']

# To expose the main page
@app.route('/')
def root():
    return send_from_directory('./client/dist', 'index.html')

# To expose all the assets 
@app.route('/<path:path>')
def assets(path):
    return send_from_directory('./client/dist',path)

# Backend functions to fetch
@app.route('/time')
def gettime():
    return str(datetime.now().strftime("%H:%M:%S"))

@app.route("/login")
def login():
    user = request.args.get("user");
    pas = request.args.get("pass");
    job = request.args.get("job");
    hpas = pas;
    posts = db.posts
    postform = {
        "user": user,
        "pass": pas,
        "job": job
    }
    post = posts.find_one({"user":user})
    if not post:
        posts.insert_one(postform)
    else:
        if hpas == post['pass']:
            return str(post['job'])
        else:
            return "HEHE"
        
# if __name__ == "__main__":
    # app.run(debug=True)