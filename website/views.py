from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/') #this route is hit when the initial program is run (view) 
def home():
    return render_template('home.html') # this then runs the home function to display text

@views.route('/faq') #website route 
def faq():
    return render_template('faq.html') #function (faq.html) in templates

@views.route('/about')
def about():
    return render_template('about.html')

@views.route('/contact')
def contact():
    return render_template('contact.html')




