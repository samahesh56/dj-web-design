import sqlite3
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'basic page'

# Create a connection to the SQLite database (it will be created if it doesn't exist)
conn = sqlite3.connect('dj.db')

# What is sql? this will serve as data storage to retrive and store information such as a dj profile, faq entries, and more. 

# Create a cursor to execute SQL commands
cursor = conn.cursor()

# Create DJs table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS DJs (
        dj_id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT NOT NULL,
        style TEXT,
        bio TEXT,
        email TEXT,
        phone TEXT,
        image TEXT,
        video_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
''')

# Create FAQ table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS FAQ (
        faq_id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL,
        answer TEXT NOT NULL
    )
''')

# Commit the changes and close the connection
conn.commit()
conn.close()



if __name__ == "__main__":
    app.run()