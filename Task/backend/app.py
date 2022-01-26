from email.policy import default
from turtle import title
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
# import sqlalchemy
import datetime


app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://root:1111@localhost/advertisements'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# Table명 
class Articles(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    dateCreated = db.Column(db.DateTime, default = datetime.datetime.now, nullable=False)

    def __init__(self, title, description, price):
        self.title = title
        self.description = description
        self.price = price


@app.route('/', methods = ['GET'])
def get_articles():
    return jsonify({"Hello":"World"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

