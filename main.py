# Import necessary modules from Flask
from flask import Flask, render_template, request

# Create a Flask application instance
app = Flask(__name__)

# Define a route for the root URL ("/")
@app.route("/")
def index():
    # Render the index.html template
    return render_template("index.html")

# Define a route for topics with a dynamic page parameter
@app.route("/topics/<page>")
def calc(page):
    # Check if the page parameter is "add"
    if page == "add":
        # Render the add-topic.html template
        return render_template("add-topic.html")
    # Render the template corresponding to the page parameter
    return render_template(page + ".html")

# Run the Flask application if the script is executed directly
if __name__ == "__main__":
    # Start the Flask development server on localhost with debugging enabled
    app.run(host="127.0.0.1", port=8080, debug=True)
