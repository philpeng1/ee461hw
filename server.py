from flask import Flask, jsonify;
from typing import Optional;
from flask_cors import CORS
flask_app = Flask(__name__)
app = Flask(__name__, static_folder='./build', static_url_path='')
CORS(app)
@app.route('/home/')
def index():
    return app.send_static_file('index.html')


@app.route("/name/<input>", methods=["GET"])
def returnname(input: Optional[str] = None):
	if(input == 'phil'):
		output = 'peng'
	else:
		output = 'type phil'

	return jsonify(lastname = output)

     
if __name__ == "__main__":
  app.run(debug=False)