
import {Link} from "react-router-dom";
import React, {useState, useEffect} from 'react'
import APIService from "./APIService";

function Form(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const insertArticle = () => {
        APIService.InsertArticle({title, description, price})
            .then(resp => props.insertedArticle(resp))
            .catch(error => console.log(error))
    }
    return (
        <div>
                <div className = "mb-3">
                <label htmlFor = "title" className = "form-label">Title</label>
                <input
                    type="text" className = "form-control"
                    placeholder = "Please Enter Title"
                    onChange = {(e) => setTitle(e.target.value)}
                />

                    <label htmlFor = "description" className = "form-label">Description</label>
                <textarea
                    row = "5"
                    onChange = {(e) => setDescription(e.target.value)}
                    className = "form-control"
                    placeholder = "Please Enter Description"
                    />

                    <label htmlFor = "price" className = "form-label">Price</label>
                <input
                    type="number"
                    onChange = {(e) => setPrice(e.target.value)}
                    className = "form-control"
                    placeholder = "Please Enter Price (Only Number)"
                />

                    <button
                        onClick={insertArticle}
                        className = "btn btn-success mt-3"
                    ><Link to='/' className="btn btn-success">Insert</Link></button>


                </div>
        </div>
    )
}

export default Form