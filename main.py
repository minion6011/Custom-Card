from flask import Flask
from flask import render_template, send_file

app = Flask(__name__, static_folder="", template_folder="")

@app.route('/')
def index():
	return render_template("index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
