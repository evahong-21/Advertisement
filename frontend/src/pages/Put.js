import React, { useState, useEffect } from "react";
import "../shared/App.css";
import { Link } from "react-router-dom";
import Update from "../components/Update";
const API_URL = process.env.REACT_APP_API_URL || '/api'

function Put({ match }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/advertisement/detail?id=${match.params.id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, [match.params.id]);

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
      <Update article={articles} />
    </div>
  );
}

export default Put;
