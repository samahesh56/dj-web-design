# DJ Website

This is a project to create a modern and attractive website for DJ services. The DJ Website project aims to create a dynamic and visually appealing website to serve as a platform for showcasing DJ services, experience, and recent performances. The project is initially designed as a personal DJ website to showcase events and bookings, with expansion potential to cater to college students/etc in the future.


In the future, using front-end software, the website will showcase DJ profiles, provide information about services, and allow potential clients to contact the DJs for bookings.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Python 3.x installed
- (Optional but reccomended) Virtual environment tool (e.g., virtualenv or venv. Install using `pip install virtualenv` in your terminal) 
- Flask installed (Install using `pip install Flask` in your terminal)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/samahesh56/dj-web-design.git
   cd dj-website
   ```
   Or simply clone using the GitHub Desktop App. Simply go to file -> clone a repository -> url: https://github.com/samahesh56/dj-web-design.git

2. **Create and Activate virtual environment:**

    ```bash
    python -m venv venv 
    ```

    Then activate the environment. Type "venv\Scripts\activate" in cmd (Windows) or "source venv/bin/activate" (macOS/Linux)
    If this gives you an error, follows steps provided for the error message to enable scripts.

3. **Install Project Dependencies:**

    ```
    pip install -r requirements.txt
    ```

4. **Set Up the SQLite Database:**

    Run these commands to initialize and migrate the database. (Currently optional)
    ```
    flask db init
    flask db migrate
    flask db upgrade
    ```

### Usage

1. **Run the Flask Development Server:**

    ```
    flask run
    ```
2. **Access the Website:**

    Open a web browser and navigate to http://localhost:5000 to view the website running locally.

### Project Structure
- run.py: Main application file.
- config.py: Configuration settings.
- website/: Contains the website's core logic and templates.
- static/: Static files like CSS and JavaScript.
- templates/: HTML templates.
- views.py: Defines the routes and views.
- models.py: Defines the database models.
- venv/: Virtual environment folder (ignored by Git).

## Contributing 

Contributions are welcome! If you'd like to contribute to my project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them thoroughly.
4. Create a pull request with a clear description of your changes.

Unsure how to proceed? https://docs.github.com/en/get-started/quickstart/contributing-to-projects for more information. 

### License

This project is licensed under the MIT License - see the LICENSE file for details.



