import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { fetchBooks } from "../../api";
import { PaginationControl } from "react-bootstrap-pagination-control";
import Book from "./Books";

function Home() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [page, setPage] = useState(1)
  const [books, setBooks] = useState([])

  if (!token) {
    navigate('/login')
  }

  useEffect(() => {
    fetchBooks(token)
      .then(response => {
        setBooks(response.data.data);
      })
      .catch(error => {
        alert('service error');
        console.log(error);
      });
  }, [token]);

  return (
    <>
      <Header token={token}/>
      
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Books List</h1>
            </div>
            <div className="table-responsive small">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Subtitle</th>
                    <th scope="col">Author</th>
                    <th scope="col">Pages</th>
                  </tr>
                </thead>
                <tbody>
                  { books.map((book, index) => (
                    <Book
                      key={book.title}
                      subtitle={book.subtitle}
                      title={book.title}
                      author={book.author}
                      index={index}
                      id={book.id}
                      pages={book.pages}
                    />
                  ))}
                </tbody>
              </table>
              <PaginationControl
                page={page}
                between={4}
                total={books.length}
                limit={10}
                changePage={(page) => {
                  setPage(page); 
                  console.log(page)
                }}
                ellipsis={1}
              />
            </div>
          </main>
        </div>
      </div>
    </>
    
  )
}

export default Home
