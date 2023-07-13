import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBook, fetchBook } from "../../api";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DetailBook() {
  const { id } = useParams()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const [book, setBook] = useState({})

  if (!token) {
    navigate('/login')
  }

  useEffect(() => {
    fetchBook(token, id)
      .then(response => {
        setBook(response.data);
        console.log(response.data);
      })
      .catch(error => {
        alert('service error');
        console.log(error);
      });
  }, [id, token]);

  const toEdit =  (id) => {
    navigate(`/edit-book/${id}`)
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteBook(token, id);
      console.log(response.data);
      navigate('/home')
    } catch (error) {
      alert('service error');
      console.error(error);
    }
  };

  return (
    <>
      <Header token={token}/>
      <div className="container-fluid">
        <div className="row">
          <Sidebar/>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Detail Buku</h1>
            </div>
            <div className="container">
              <h1 className="mt-5">{ book.title }</h1>
              <p className="lead">{ book.subtitle }</p>
              <p>{ book.author }, { book.publisher } - { book.pages } pages.</p>
              <p>{ book.description }</p>
            </div>

            <div className="d-grid gap-2 d-md-block">
              <button className="btn btn-primary" type="button" onClick={toEdit(book.id)}>Edit</button>
              <form onSubmit={handleDelete}>
              <button className="btn btn-danger" type="submit">Delete</button>
              </form> 
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default DetailBook