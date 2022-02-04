import React from "react";
import "../shared/App.css";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const Insert = () => {
  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Advertisements Insert</h1>
        </div>
        <div className="col-md-2">
          <Link to="/" className="btn btn-light">
            Home
          </Link>
        </div>
      </div>
      <br />
      <br />
      <Form />
    </div>
  );
};

export default Insert;
