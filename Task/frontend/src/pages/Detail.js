import React from "react";
import "../shared/App.css";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import APIService from "../components/APIService";
import moment from "moment";

function Detail({ match }) {
  const [article, setArticle] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/get/${match.params.id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticle(resp))
      .catch((error) => console.log(error));
  }, [match.params.id]);

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
      } else {
        onCancel();
      }
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

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Advertisements Detail</h1>
        </div>
        <div className="col-md-2">
          <Link to="/" className="btn btn-light">
            Home
          </Link>
        </div>
      </div>
      <br />
      <br />
      <div>
        <div key={article.id}>
          <h2>Title : {article.title}</h2>
          <br />
          <p>Description : {article.description}</p>
          <p>Price : {article.price}</p>
          <p>
            Date : {moment(article.dateCreated).format("HH:mm:ss YY/MM/DD")}
          </p>
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
    </div>
  );
}

export default Detail;
