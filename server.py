from flask import Flask, jsonify;
from flask_cors import CORS
flask_app = Flask(__name__)
app = Flask(__name__, static_folder='./build', static_url_path='/')
CORS(app)
@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route("/name/<input>", methods=["GET"])
def return(input: Optional[str] = None):
	if(input == 'phil'):
		output = 'peng'
	else:
		output = 'type phil'

	return jsonify(last_name = output)

     
if __name__ == "__main__":
  app.run(debug=False)