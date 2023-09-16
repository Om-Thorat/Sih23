from flask import Flask, send_from_directory, request
import pymongo
import bcrypt as bc
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

@app.route("/upload")
def upload():
    img=request.args.get("image");
    users = db.users
    uploadimage={"image":img}
    users.insert_one(uploadimage)
    return ["image uploaded"]


@app.route("/login")
def login():
    user = request.args.get("user");
    pas = request.args.get("pass");
    job = request.args.get("job");
    bytes = pas.encode('utf-8');
    salt = bc.gensalt();
    hpas = bc.hashpw(bytes, salt);
    print(type(hpas))
    users = db.users
    entryform = {
        "user": user,
        "pass": hpas,
        "job": job
    }
    entry = users.find_one({"user":user})
    if not entry:
        users.insert_one(entryform)
        return ["yep",job ,"registered"]
    else:
        if entry['job'] != job:
            return ["nope","Wrong job"]
        if (bc.checkpw(pas.encode('utf-8'),entry['pass'])):
            return ["yep",str(entry['job'])]
        else:
            return ["nope","You mistyped it maybe? Try again"]
        
if __name__ == "__main__":
    app.run(debug=True)