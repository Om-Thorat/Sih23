from flask import Flask, send_from_directory
from datetime import datetime
app = Flask(__name__)

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
    return str('farmer')

# if __name__ == "__main__":
#     app.run(debug=True)