import { Link } from "react-router-dom";
import "../shared/App.css";
import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import { COLUMNS } from "../components/columns";

function Home() {
  const [articles, setArticles] = useState([]);
  const [columnName, setColumnName] = useState("dateCreated");
  const [sortBy, setSortBy] = useState("True");

  const handleSelect = (e) => {
    setColumnName(e.target.value);
  };

  const dateSelect = (e) => {
    setSortBy(e.target.value);
  };

  const columns = COLUMNS;

  useEffect(() => {
    fetch(`get/${columnName}&${sortBy}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, [sortBy, columnName]);

  return (
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
      <select className="second" onChange={handleSelect} value={columnName}>
        <option value="price">Price</option>
        <option value="dateCreated">Date</option>
      </select>
      <select className="first" onChange={dateSelect} value={sortBy}>
        <option defaultValue value="True">
          Desc
        </option>
        <option value="False">Asc</option>
      </select>
      <Table columns={columns} data={articles} />
    </div>
  );
}

export default Home;
