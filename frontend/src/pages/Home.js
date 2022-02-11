import { Link } from "react-router-dom";
import "../shared/App.css";
import React, { useState, useEffect } from "react";

import Table from "../components/Table";
import { COLUMNS } from "../components/columns";

const API_URL = process.env.REACT_APP_API_URL || '/api'

function Home() {
  const [articles, setArticles] = useState([]);
  const [columnName, setColumnName] = useState("dateCreated");
  const [sortBy, setSortBy] = useState("True");
  const [perPage, setPerPage] = useState("10");
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState();

  const handleSelect = (e) => {
    setColumnName(e.target.value);
  };

  const dateSelect = (e) => {
    setSortBy(e.target.value);
  };

  const columns = COLUMNS;
  useEffect(() => {
    fetch(`${API_URL}/advertisement?field=${columnName}&sort=${sortBy}&page=${perPage}&index=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setArticles(resp.articles);
        setMaxPage(Math.ceil(resp.pagination.pages));
      })
        // .then(() => console.log(articles))

      .catch((error) => console.log(error));

  }, [sortBy, columnName, perPage, page]);

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
        <div className="select-box">
        <select
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setPage(0)
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <Table columns={columns} data={articles} />
            <div className="pagination">
        <button onClick={() => setPage(0)} disabled={page===0}>
          {"<<"}
        </button>
        &nbsp;
        <button onClick={() => setPage(page===0? 0 : page-1 )} disabled={page===0}>
          {"<"}
        </button>
        &nbsp;
        <button onClick={() => setPage(page===maxPage? maxPage : page+1)} disabled={page+1===maxPage}>
          {">"}
        </button>
        &nbsp;
        <button onClick={() => setPage(maxPage-1)} disabled={page+1===maxPage}>
          {">>"}
        </button>
        &nbsp; &nbsp;
        <span>
          Page{" "}
          <strong>
            {page + 1} of {maxPage}
          </strong>{" "}
        </span>
        <span>
          &nbsp; | Go to page : &nbsp;
          <input
            type="number"
            defaultValue={page + 1}
            onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  setPage(page);
            }}
            style={{ width: "100px" }}
            min="1" max={maxPage}
          />
        </span>{" "}
            </div>
      </div>
  );
}

export default Home;