import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { addBook } from "../../api";

function AddBook() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  
  const [isbn, setIsbn] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [publisher, setPublisher] = useState('');
  const [pages, setPages] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addBook(token, isbn, title, subtitle, author, published, publisher, pages, description, website);
      console.log(response.data);
      navigate('/home')
    } catch (error) {
      alert('service error');
      console.error(error);
    }
  };

  return (
    <>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <Sidebar/>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Tambah Buku</h1>
            </div>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="inputIsbn" className="form-label">ISBN</label>
                <input type="text" className="form-control" id="inputIsbn" placeholder="123456789"
                  value={isbn}
              onChange={(e) => setIsbn(e.target.value)} 
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputTitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="inputTitle" placeholder="Book Title"
                  value={title}
              onChange={(e) => setTitle(e.target.value)} 
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputSubtitle" className="form-label">Subtitle</label>
                <input type="text" className="form-control" id="inputSubtitle" placeholder="Subtitles"
                  value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)} 
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAuthor" className="form-label">Author</label>
                <input type="text" className="form-control" id="inputAuthor" placeholder="William Shakespeare"
                  value={author}
              onChange={(e) => setAuthor(e.target.value)} 
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPublished" className="form-label">Published</label>
                <input type="text" className="form-control" id="inputPublished" placeholder="2017-07-16 00:00:00"
                  value={published}
              onChange={(e) => setPublished(e.target.value)} 
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPublisher" className="form-label">Publisher</label>
                <input type="text" className="form-control" id="inputPublisher" placeholder="Ardans"
                  value={publisher}
              onChange={(e) => setPublisher(e.target.value)} 
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPages" className="form-label">Pages</label>
                <input type="number" className="form-control" id="inputPages" placeholder="1234"
                  value={pages}
              onChange={(e) => setPages(e.target.value)} 
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputDescription" className="form-label">Description</label>
                <textarea className="form-control" placeholder="Leave a comment here" id="inputDescription"
                value={description}
              onChange={(e) => setDescription(e.target.value)} ></textarea>
              </div>
              <div className="col-12">
                <label htmlFor="inputWebsite" className="form-label">Website</label>
                <input type="text" className="form-control" id="inputWebsite" placeholder="example.com"
                  value={website}
              onChange={(e) => setWebsite(e.target.value)} 
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
    
  )
}

export default AddBook
