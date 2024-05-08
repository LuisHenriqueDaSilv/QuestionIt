from flask import Flask
from app.routes import router

app = Flask(__name__)

app.register_blueprint(router)
