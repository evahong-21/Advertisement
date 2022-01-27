import { Link } from "react-router-dom";
import '../shared/App.css';
import Table from '../components/Table';
import {useState, useEffect} from 'react';
import {COLUMNS} from "../components/columns";
import React from 'react';

const Home = () => {

    const [articles, setArticles] = useState([])
    const columns = COLUMNS;

    useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      method:'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Advertisements</h1>
        </div>
        <div className="col">
          <button
              className="btn btn-success"
              // onClick={openForm}
          ><Link to='/insert' className="btn btn-success">InsertArticle</Link></button>
        </div>
      </div>
      <br/>
      <br/>
      <Table columns={columns} data={articles}/>
    </div>
  );
}

export default Home;

//
// import './App.css';
// import {useState, useEffect, useMemo} from 'react';
// import Form from './components/Form';
// import Table from './components/Table';
//
// function App() {
//
//   const [articles, setArticles] = useState([])
//--  const [editedArticle, setEditArticle] = useState(null)
//   const columns = useMemo(() => [
//     {
//         Header: 'Id',
//         accessor: 'id'
//     },
//     {
//         Header: 'Title',
//         accessor: 'title'
//     },
//     {
//         Header: 'Price',
//         accessor: 'price'
//     },
//     {
//         Header: 'DateCreated',
//         accessor: 'dateCreated'
//     }])
//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/get', {
//       method:'GET',
//       headers: {
//         'Content-Type' : 'application/json'
//       }
//     })
//     .then(resp => resp.json())
//     .then(resp => setArticles(resp))
//     .catch(error => console.log(error))
//   }, [])
//
//   const editArticle = (article) => {
//     // console.log("Hello World")
//     setEditArticle(article)
//   }
//
//   const deleteArticle = (article) => {
//     const new_articles = articles.filter(myarticle => {
//       if(myarticle.id === article.id) {
//         return false
//       }
//       return true
//     })
//     setArticles(new_articles)
//   }
//
//   // update 눌렀을때 바로 화면에 연동되게(새로고침 안해도 됨)
//   const updatedData = (article) => {
//     const new_article = articles.map(my_article => {
//       if(my_article.id === article.id) {
//         return article
//       }
//       return my_article
//     })
//     setArticles(new_article)
//   }
//
//   const insertedArticle = (article) => {
//     const new_articles = [...articles, article]
//     setArticles(new_articles)
//   }
//
//--  const openForm = () => {
//--    setEditArticle({title:'', description:'', price:''})
//--  }
//
//   return (
//     <div className="App">
//       <div className="row">
//         <div className="col">
//           <h1>Advertisements</h1>
//         </div>
//         <div className="col">
//           <button
//               className="btn btn-success"
//               onClick={openForm}
//           >InsertArticle</button>
//         </div>
//       </div>
//       <br/>
//       <br/>
//       <Table columns={columns} data={articles}/>
//       {/*<ArticleList articles = {articles} editArticle = {editArticle} deleteArticle = {deleteArticle}/>*/}
//--       {/*{editedArticle ? <Form article = {editedArticle} updatedData = {updatedData} insertedArticle = {insertedArticle}/> : null}*/}
//     </div>
//   );
// }
//
// export default App;
