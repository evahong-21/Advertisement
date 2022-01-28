import { Link } from "react-router-dom";
import '../shared/App.css';
import Table from '../components/Table';
import {useState, useEffect} from 'react';
import {COLUMNS} from "../components/columns";
import React from 'react';
// import Moment from 'moment';

const Home = () => {

    const [articles, setArticles] = useState([])
    const columns = COLUMNS;

    useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      method:'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Advertisements</h1>
        </div>
        <div className="col">
          <button
              className="btn btn-success"
              // onClick={openForm}
          ><Link to='/insert' className="btn btn-success">InsertArticle</Link></button>
        </div>
      </div>
      <br/>
      <br/>
      <Table columns={columns} data={articles}/>
    </div>
  );
}

export default Home;
