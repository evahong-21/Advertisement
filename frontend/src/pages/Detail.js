import React from "react";
import "../shared/App.css";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import APIService from "../components/APIService";
import moment from "moment";
import Mark from "mark.js";
import { Switch } from "evergreen-ui";

const API_URL = process.env.REACT_APP_API_URL || "/api";

// example1 : Protein/Gene
const first = ["brand", "samsung", "apple"];
// example2 : DNA
const second = ["computer", "keyboard", "mouse", "moniter"];
// example3 : Species
const third = ["beverage", "gongcha", "starbucks"];

function Detail({ match }) {
  const [article, setArticle] = useState([]);
  const [value, setValue] = useState(false);

  const history = useHistory();
  useEffect(() => {
    fetch(`${API_URL}/advertisement/detail?id=${match.params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      // .then((resp)=>console.log(resp))
      .then((resp) => setArticle(resp))
      .catch((error) => console.log(error));
  }, [match.params.id]);

  useEffect(() => {
    if (value) {
      highlight();
    } else {
      nonHighlight();
    }
  }, [value, article]);

  const deleteArticle = () => {
    APIService.DeleteArticle(article.id)
      .then(() => history.push("/"))
      .catch((error) => console.log(error));
  };

  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      }
      onCancel();
    };
    return confirmAction;
  };

  const highlight = () => {
    const testHighlight = document.querySelectorAll("div.col");
    testHighlight.forEach(function (userHighlight) {
      const instance = new Mark(userHighlight);
      // console.log(userHighlight);
      instance.mark(first, { className: "first" });
      instance.mark(second, { className: "secondary" });
      instance.mark(third, { className: "third" });
    });
  };

  const nonHighlight = () => {
    const testHighlight = document.querySelectorAll("div.descript");
    testHighlight.forEach(function (userHighlight) {
      const instance = new Mark(userHighlight);
      // console.log(userHighlight);
      instance.unmark();
    });
  };

  //확인을 누르면 삭제, 취소를 누르면 그대로
  const deleteConfirm = () => deleteArticle(article);
  const cancelConfirm = () => history.push(`/detail/${article.id}`);

  const confirmDelete = useConfirm(
    "Are you sure you want to delete?",
    deleteConfirm,
    cancelConfirm
  );

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Advertisements Detail </h1>
        </div>
        <div className="col-md-2">
          <Link to="/" className="btn btn-light">
            Home
          </Link>
        </div>
      </div>
      <br />
      <br />
      <div className="col" key={article.id}>
        <h2>Title : {article.title}</h2>
        <br />

        <div className="descript">
          <Switch
            checked={value}
            onChange={() => {
              // value ? nonHighlight() : highlight();
              setValue(!value);
            }}
          />

          <span>
            Auto Highlights
            <span>{value ? "Beverage computer brand" : ""}</span>
          </span>
          <br />
          <br />
          <p>Description : {article.description}</p>
          <p>Price : {article.price}</p>
          <p>
            Date : {moment(article.dateCreated).format("HH:mm:ss YY/MM/DD")}
          </p>
        </div>
        <br />
        <div className="row">
          <div className="col-md-1">
            <Link
              to={{ pathname: `/put/${article.id}` }}
              className="btn btn-outline-light"
            >
              Update
            </Link>
          </div>
          <div className="col-md-1">
            <button className="btn btn-outline-light" onClick={confirmDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
