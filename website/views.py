from flask import Blueprint
from flask import render_template

views = Blueprint('views', __name__)

@views.route('/') #this route is hit when the initial program is run (view) 
def home():
    return '<h1>This is the home page! Please use /faq, /about/ and /contact to navigate.<h1>' # this then runs the home function to display text

@views.route('/faq')
def faq():
    return render_template('faq.html')

@views.route('/about')
def about():
    return 'About the founders.'

@views.route('/contact')
def contact():
    return 'Contact me at samahesh56@gmail.com'




