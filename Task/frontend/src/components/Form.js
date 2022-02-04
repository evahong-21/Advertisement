import React, { useState } from "react";
import APIService from "./APIService";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const insertArticle = () => {
    APIService.InsertArticle({ title, description, price })
      // .then(() => history.push(`/`))
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form action={"/"} onSubmit={insertArticle}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Please Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            required
            row="5"
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            placeholder="Please Enter Description"
          />
          <br />
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            required
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            placeholder="Please Enter Price (Only Number)"
          />{" "}
          <br />
          <button type="submit" className="btn btn-outline-light">
            Insert
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
