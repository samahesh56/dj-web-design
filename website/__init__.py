import sqlite3
from flask import Flask

def create_app():
    app = Flask(__name__)

    from .views import views #from the .views .py file, import the route "views"

    app.register_blueprint(views, url_prefix="/") # registers blueprint. "url_prefix" creates subdirectories.
    

    return app

