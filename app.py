from flask import Flask, send_from_directory, request
import pymongo
import argon2
import os
from datetime import datetime
app = Flask(__name__)

ph = argon2.PasswordHasher()

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
    hpas = ph.hash(pas);
    users = db.users
    entryform = {
        "user": user,
        "pass": hpas,
        "job": job
    }
    entry = users.find_one({"user":user})
    if not entry:
        users.insert_one(entryform)
    else:
        if entry['job'] != job:
            return ["nope","Wrong job"]
        try:
            ph.verify(entry['pass'],pas)
            if ph.check_needs_rehash(entry['pass']):
                entry['pass'] = ph.hash(pas);
                users.update_one({"user":user},{"$set":{ "pass": entry['pass'] }},upsert=False)
            return ["yep",str(entry['job'])]
        except argon2.exceptions.VerifyMismatchError:
            return ["nope","You mistyped it maybe? Try again"]
        
# if __name__ == "__main__":
#     app.run(debug=True)