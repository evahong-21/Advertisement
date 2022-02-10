from flask import Flask, jsonify, request, Response
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from sqlalchemy import asc, desc
import config

app = Flask(__name__, static_folder='./static', static_url_path='/')
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = config.alchemy_uri()
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


# Table명
class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
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
        fields = ('id', 'title', 'description', 'price', 'dateCreated')


article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)


@app.before_first_request
def init_db():
    db.create_all()


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/advertisement', methods=['GET'])
def get_sort_articles():
    # sortby True = desc / False = asc
    # 시간이 갈수록 큰 값
    field = request.args.get('field', "dateCreated", type=str)
    sort = request.args.get('sort', "True", type=str)
    # print(field, sort)

    all_articles = Articles.query.order_by(asc(field))

    if sort == "True":
        all_articles = Articles.query.order_by(desc(field))

    results = articles_schema.dump(all_articles)
    return jsonify(results)


@app.route('/api/advertisement/detail', methods=['GET'])
def post_details():
    article = Articles.query.get(request.args.get("id"))
    return article_schema.jsonify(article)


@app.route('/api/advertisement', methods=['POST'])
def add_article():
    title = request.json['title']
    description = request.json['description']
    price = request.json['price']

    # 공백이 들어간다면 backend에서 에러 처리
    if (not title.strip()) or (not description.strip()) or (not str(price).strip()):
        # return "Record not found", 400
        return article_schema.jsonify({"dateCreated": "None"})

    try:
        int(price)
    except:
        return article_schema.jsonify({"dateCreated": "Integer"})

    articles = Articles(title, description, price)
    db.session.add(articles)
    db.session.commit()
    return article_schema.jsonify(articles)


@app.route('/api/advertisement', methods=['PUT'])
def update_article():
    article = Articles.query.get(request.args.get("id"))

    title = request.json['title']
    description = request.json['description']
    price = request.json['price']

    if (not title.strip()) or (not description.strip()) or (not str(price).strip()):
        print("error")
        return article_schema.jsonify({"dateCreated": "None"})

    try:
        int(price)
    except:
        return article_schema.jsonify({"dateCreated": "Integer"})

    article.title = title
    article.description = description
    article.price = price

    db.session.commit()
    return article_schema.jsonify(article)


@app.route('/api/advertisement', methods=['DELETE'])
def article_delete():
    article = Articles.query.get(request.args.get("id"))
    db.session.delete(article)
    db.session.commit()
    return article_schema.jsonify(article)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
