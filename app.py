import os
from flask import Flask
from flask import render_template, request, json, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/', methods=["POST", "GET"])
def read_json():
    filename = os.path.join(app.static_folder, 'questions.json')
    with open(filename) as questions:
        data = json.load(questions)
    if request.method == "GET":
        return jsonify(data)
    elif request.method == "POST":
        print(request.form['fname'])
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)