import React from 'react';
import '../shared/App.css';
import {useState} from 'react';
import Form from '../components/Form';
import {Link} from "react-router-dom";

const Insert = () => {
    const [articles, setArticles] = useState([])

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
        <div className="col-md-2">
             <Link to='/' className="btn btn-light">Home</Link>
        </div>
      </div>
      <br/>
      <br/>
        <Form insertedArticle = {insertedArticle}/>

    </div>
  );
}

export default Insert;
