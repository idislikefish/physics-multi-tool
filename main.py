from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/topics/<page>")
def calc(page):
    if page == "add":
        return render_template("add-topic.html")
    return render_template(page+".html")


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)