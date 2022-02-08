import React, { useState, useEffect } from "react";
import APIService from "./APIService";

function Update(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setTitle(props.article.title);
    setDescription(props.article.description);
    setPrice(props.article.price);
  }, [props.article]);

  const updateArticle = (e) => {
    APIService.UpdateArticle(props.article.id, { title, description, price })
      .then((resp) => {
        if (resp.dateCreated === "None") {
          alert("Input Error");
          e.preventDefault();
          document.location = `/put/${props.article.id}`;
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form action={`/detail/${props.article.id}/`} onSubmit={updateArticle}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title || ""}
            placeholder="Please Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            // required
            row="5"
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            placeholder="Please Enter Description"
          />
          <br />
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            // required
            type="number"
            value={price || ""}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            placeholder="Please Enter Price (Only Number)"
          />
          <br />
          <button type="submit" className="btn btn-outline-light">
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
