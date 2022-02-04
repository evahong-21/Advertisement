import { Link } from "react-router-dom";
import "../shared/App.css";
import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import { COLUMNS } from "../components/columns";
// import Moment from 'moment';

function Home() {
  const [articles, setArticles] = useState([]);
  const columns = COLUMNS;

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch("http://127.0.0.1:5000/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((resp) => console.log(resp))
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Advertisements</h1>
        </div>
        <div className="col-md-2">
          <Link to="/insert" className="btn btn-light">
            InsertArticle
          </Link>
        </div>
      </div>
      <br />
      <br />

      <Table columns={columns} data={articles} />
    </div>
  );
}

export default Home;
