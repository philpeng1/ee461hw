from flask import Flask
flask_app = Flask(__name__)

@app.route('/')
def index():
    return app.send_static_file('index.html')

    app = Flask(__name__, static_folder='./build', static_url_path='/')

    if __name__ == "__main__":
       app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')