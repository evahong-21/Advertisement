import React from "react";
import "../shared/App.css";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import APIService from "../components/APIService";
import moment from "moment";
import Mark from "mark.js";
import { Switch } from "evergreen-ui";
import TextMarker from "../components/TextMarker";

const API_URL = process.env.REACT_APP_API_URL || "/api";

// example : Protein/Gene, Species, DNA
const first = ["brand", "samsung", "apple"];
const second = ["computer", "keyboard", "mouse", "moniter"];
const third = ["beverage", "gongcha", "starbucks"];

function Detail({ match }) {
  const [article, setArticle] = useState([]);
  const [autoHighlight, setAutoHighlight] = useState(false);
  const [textMarker, setTextMarker] = useState(false);
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
    autoHighlight ? highlight() : nonHighlight(true);
    !textMarker ? nonHighlight(false) : customHighlight();
  }, [autoHighlight, textMarker, article]);

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

  //확인을 누르면 삭제, 취소를 누르면 그대로
  const deleteConfirm = () => deleteArticle(article);
  const cancelConfirm = () => history.push(`/detail/${article.id}`);

  const confirmDelete = useConfirm(
    "Are you sure you want to delete?",
    deleteConfirm,
    cancelConfirm
  );

  const highlight = () => {
    const testHighlight = document.querySelectorAll("div.App");
    testHighlight.forEach(function (userHighlight) {
      const instance = new Mark(userHighlight);
      instance.mark(first, { className: "first" });
      instance.mark(second, { className: "secondary" });
      instance.mark(third, { className: "third" });
    });
  };

  const nonHighlight = (props) => {
    const testHighlight = document.querySelectorAll("div.descript");
    testHighlight.forEach(function (userHighlight) {
      const instance = new Mark(userHighlight);
      // instance.unmark();
      if (props === true) {
        instance.unmark({ className: "first" });
        instance.unmark({ className: "secondary" });
        instance.unmark({ className: "third" });
      } else {
        instance.unmark({ className: "n0" });
        instance.unmark({ className: "n1" });
        instance.unmark({ className: "n2" });
        instance.unmark({ className: "n3" });
        instance.unmark({ className: "n4" });
        instance.unmark({ className: "n5" });
      }
    });
  };

  const customHighlight = () => {
    return (
      <>
        <TextMarker index={"n0"} color={"#F2D7D5"} />
        <TextMarker index={"n1"} color={"#C39BD3"} />
        <TextMarker index={"n2"} color={"#F9E79F"} />
        <TextMarker index={"n3"} color={"#85C1E9"} />
        <TextMarker index={"n4"} color={"#FAD7A0"} />
        <TextMarker index={"n5"} color={"#A3E4D7"} />
      </>
    );
  };

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
      <div id="Switch-Box">
        <div id="TextMarker-Box">
          <Switch
            checked={textMarker}
            onChange={() => {
              setTextMarker(!textMarker);
            }}
          />
          <span>Text Markers</span>
          <div>{textMarker ? customHighlight() : ""}</div>
          <br />
        </div>
        <div id="Auto-Highlight-Box">
          <Switch
            checked={autoHighlight}
            onChange={() => {
              setAutoHighlight(!autoHighlight);
            }}
          />
          <span>
            Auto Highlights
            <span>{autoHighlight ? "  Beverage computer brand" : ""}</span>
          </span>
        </div>
      </div>
      <br />
      <div className="col" key={article.id}>
        <h2>Title : {article.title}</h2>
        <div className="descript">
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
