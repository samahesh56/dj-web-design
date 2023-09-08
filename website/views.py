from flask import Blueprint

views = Blueprint('views', __name__)

@views.route('/') #this route is hit when the initial program is run (view) 
def home():
    return '<h1>Test<h1>' # this then runs the home function to display text
