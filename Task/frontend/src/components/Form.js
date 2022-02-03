import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import APIService from './APIService';

function Form(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');


  const insertArticle = () => {
    APIService.InsertArticle({ title, description, price })
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
      .then((resp) => props.insertedArticle(resp))
      .catch((error) =>  console.log(error));
  };
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
            required
          type="text"
          className="form-control"
          placeholder="Please Enter Title"
          onChange={(e) => setTitle(e.target.value)}

        />
        <br />
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
            required
          row="5"
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          placeholder="Please Enter Description"
        />
        <br />
        <label htmlFor="price" className="form-label">Price</label>
        <input
            required
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
          placeholder="Please Enter Price (Only Number)"
        />
        {' '}
        <br />
        <Link to="/" onClick={insertArticle} className="btn btn-outline-light">Insert</Link>

      </div>
    </div>
  );
}

export default Form;
