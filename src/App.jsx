import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home/Home";
import AddBook from "./components/Home/AddBook";
import DetailBook from "./components/Home/DetailBook";
import EditBook from "./components/Home/EditBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/add-book" element={<AddBook />}></Route>
        <Route path="/detail-book/:id" element={<DetailBook />}></Route>
        <Route path="/edit-book/:id" element={<EditBook />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App