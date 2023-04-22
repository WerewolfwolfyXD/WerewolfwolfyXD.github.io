from flask import Flask
import os, sys

app = Flask(__name__)

@app.route("/flasktest")
def route_flasktest():
  return "It was worked!"

@app.route("/")
def route_index():
  return "Flask Server Was Running"

if __name__ == "__main__":
  app.run(host="0.0.0.0",port=80)
