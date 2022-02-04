import React, { useState, useEffect } from "react";
import "../shared/App.css";
import { Link } from "react-router-dom";
import Update from "../components/Update";

function Put({ match }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/get/${match.params.id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, [match.params.id]);

  const updatedData = (article) => {
    const new_article = articles.map((my_article) => {
      if (my_article.id === article.id) {
        return article;
      }
      return my_article;
    });
    setArticles(new_article);
  };

  const insertedArticle = (article) => {
    const new_articles = [...articles, article];
    setArticles(new_articles);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Advertisements Update</h1>
        </div>
        <div className="col-md-2">
          <Link to="/" className="btn btn-light">
            Home
          </Link>
        </div>
      </div>
      <br />
      <br />
      <Update
        article={articles}
        updatedData={updatedData}
        insertedArticle={insertedArticle}
      />
    </div>
  );
}

export default Put;
