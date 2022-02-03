
import React, {useState, useEffect} from 'react'
import APIService from "./APIService";
import { useHistory } from 'react-router-dom';

function Update(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    let history = useHistory();

    useEffect(() => {
        setTitle(props.article.title)
        setDescription(props.article.description)
        setPrice(props.article.price)
    }, [props.article])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, description, price})
            // .then(resp => console.log(props.article.id))
            .then(() => history.push(`/detail/${props.article.id}/`))
            .catch(error => console.log(error))
    }

    return (
        <div>
                <div className = "mb-3">
                <label htmlFor = "title" className = "form-label">Title</label>
                <input
                    type="text" className = "form-control"
                    value = {title}
                    placeholder = "Please Enter Title"
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <br />
                    <label htmlFor = "description" className = "form-label">Description</label>
                <textarea
                    row = "5"
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}
                    className = "form-control"
                    placeholder = "Please Enter Description"
                    />
                <br />
                    <label htmlFor = "price" className = "form-label">Price</label>
                <input
                    type="number"
                    value = {price}
                    onChange = {(e) => setPrice(e.target.value)}
                    className = "form-control"
                    placeholder = "Please Enter Price (Only Number)"
                />
                    <br />
                        <button
                        onClick={updateArticle}
                        className = "btn btn-outline-light"
                    >Done</button>

                </div>
        </div>
    )
}

export default Update