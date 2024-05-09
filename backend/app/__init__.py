from flask import Flask
from flask_migrate import Migrate
from dotenv import load_dotenv, dotenv_values

from app.routes import router
from app.database import db
from app.database.models import Question, Response #Used in migrations


app = Flask(__name__)
load_dotenv('.env')
envConfigs = dotenv_values()
app.config.from_mapping(envConfigs) # Settings from env var

# Database/Database-migrations setup:
db.init_app(app)
migrate = Migrate(app, db, directory='./app/database/migrations')

#Routes:
app.register_blueprint(router)
