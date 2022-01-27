import React from 'react';
import '../shared/App.css';
import APIService from "../components/APIService";
import {useState, useEffect} from 'react';

const Detail = ({match}) => {
    const[article, setArticle] = useState([])

    useEffect(() => {
    fetch(`http://127.0.0.1:5000/get/${match.params.id}/`, {
      method:'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticle(resp))
    .catch(error => console.log(error))
  }, [])

    return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Advertisements Detail</h1>
        </div>
        <div className="col">
        </div>
      </div>
      <br/>
      <br/>
        <div>
          <div key = {article.id}>
            <h2>Title : {article.title}</h2>
              <br />
            <p>Description : {article.description}</p>
            <p>Price : {article.price}</p>
            <p>Date : {article.dateCreated}</p>
              <br />
              <div className="row">
                  <div className="col">
                      <button className="btn btn-primary"
                      /*onClick = {() => editArticle(article)}*/>Update</button>
                  </div>
                  <div className="col-md-1">
                      <button className="btn btn-danger"
                      /*onClick = {() => deleteArticle(article)}*/>Delete</button>
                  </div>
              </div>
          </div>
    </div>
    </div>
  );
    }

export default Detail;