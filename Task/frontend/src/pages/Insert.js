import React from 'react';
import '../shared/App.css';
import {useState} from 'react';
import Form from '../components/Form';

const Insert = () => {
    const [articles, setArticles] = useState([])
    const [editedArticle, setEditArticle] = useState(null)

  const updatedData = (article) => {
    const new_article = articles.map(my_article => {
      if(my_article.id === article.id) {
        return article
      }
      return my_article
    })
    setArticles(new_article)
  }

  const insertedArticle = (article) => {
    const new_articles = [...articles, article]
    setArticles(new_articles)
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Advertisements Insert</h1>
        </div>
        <div className="col">
        </div>
      </div>
      <br/>
      <br/>
        <Form article = {editedArticle} updatedData = {updatedData} insertedArticle = {insertedArticle}/>

    </div>
  );
}

export default Insert;
