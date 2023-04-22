from flask import Flask
import os, sys

app = Flask(__name__)

@app.route("/flasktest")
def route_flasktest():
  return "It was worked!"

if __name__ == "__main__":
  app.run(port=80)
