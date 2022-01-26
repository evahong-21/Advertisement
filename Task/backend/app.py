from email.policy import default
from turtle import title
from xmlrpc.client import Marshaller
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
# import sqlalchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://root:1111@localhost/advertisements'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)
# Table명 
class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    dateCreated = db.Column(db.DateTime, default=datetime.datetime.now, nullable=False)

    def __init__(self, title, description, price):
        self.title = title
        self.description = description
        self.price = price

class ArticleSchema(ma.Schema):
    class Meta:
        fields = ('id','title','description','price','dateCreated')

article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)

@app.route('/get', methods=['GET'])
def get_articles():
    all_articles = Articles.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)

@app.route('/get/<id>/', methods=['GET'])
def post_details(id):
    article = Articles.query.get(id)
    return article_schema.jsonify(article)

@app.route('/add', methods=['POST'])
def add_article():
    title = request.json['title']
    description = request.json['description']
    price = request.json['price']
    
    articles = Articles(title, description, price)
    db.session.add(articles)
    db.session.commit()
    return article_schema.jsonify(articles)

@app.route('/update/<id>/', methods=['PUT'])
def update_article(id):
    article = Articles.query.get(id)

    title = request.json['title']
    description = request.json['description']
    price = request.json['price']

    article.title = title
    article.description = description
    article.price = price

    db.session.commit()
    return article_schema.jsonify(article)


@app.route('/delete/<id>/', methods=['DELETE'])
def article_delete(id):
    article = Articles.query.get(id)
    db.session.delete(article)
    db.session.commit()
    return article_schema.jsonify(article)


if __name__ == '__main__':
    app.run()

