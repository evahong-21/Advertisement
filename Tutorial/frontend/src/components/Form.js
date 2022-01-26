

import React, {useState, useEffect} from 'react'
import APIService from "./APIService";

function Form(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        setTitle(props.article.title)
        setDescription(props.article.description)
        setPrice(props.article.price)
    }, [props.article])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, description, price})
            // .then(resp => console.log(props.article.id))
            .then(resp => props.updatedData(resp))
            .catch(error => console.log(error))
    }

    const insertArticle = () => {
        APIService.InsertArticle({title, description, price})
            .then(resp => props.insertedArticle(resp))
            .catch(error => console.log(error))
    }

    return (
        <div>
            {props.article ? (
                <div className = "mb-3">
                <label htmlFor = "title" className = "form-label">Title</label>
                <input
                    type="text" className = "form-control"
                    value = {title}
                    placeholder = "Please Enter Title"
                    onChange = {(e) => setTitle(e.target.value)}
                />

                    <label htmlFor = "description" className = "form-label">Description</label>
                <textarea
                    row = "5"
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}
                    className = "form-control"
                    placeholder = "Please Enter Description"
                    />

                    <label htmlFor = "price" className = "form-label">Price</label>
                <input
                    type="number"
                    value = {price}
                    onChange = {(e) => setPrice(e.target.value)}
                    className = "form-control"
                    placeholder = "Please Enter Price (Only Number)"
                />
                    {
                        props.article.id ? <button
                        onClick={updateArticle}
                        className = "btn btn-success mt-3"
                    >Update</button>
                      :
                            <button
                        onClick={insertArticle}
                        className = "btn btn-success mt-3"
                    >Insert</button>
                    }

                </div>
                ):null}
        </div>
    )
}

export default Form