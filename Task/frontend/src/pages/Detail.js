import React from 'react';
import '../shared/App.css';
import APIService from "../components/APIService";
import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";


const Detail = ({match}) => {
    const[article, setArticle] = useState([])
    const [editedArticle, setEditArticle] = useState(null)

    let history = useHistory();
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

    const deleteArticle = (article) => {
        APIService.DeleteArticle(article.id)
            .then(() => history.push("/"))
            .catch(error => console.log(error))

    }
      const editArticle = (article) => {
    // console.log("Hello World")
    setEditArticle(article)
  }

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
                      <button className="btn btn-primary" ><Link to={{pathname:`/put/${article.id}`}} className="btn btn-primary" >Update</Link></button>
                  </div>
                  <div className="col-md-1">
                      <button className="btn btn-danger"
                      onClick = {() => deleteArticle(article)}>Delete</button>
                  </div>
              </div>
          </div>
    </div>
    </div>
  );
    }

export default Detail;