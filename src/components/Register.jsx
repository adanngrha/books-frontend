import React from "react";
import '../assets/style.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { register } from '../api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(name, email, password, password_confirmation);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form-container p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Register</h3>
          <div className="mb-2">
            <label htmlFor="email">Name</label>
            <input 
            type="text" value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter Your Name" className="form-control"/>
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="email" value={email}
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter Email" className="form-control"/>
          </div>

          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password" className="form-control"/>
          </div>

          <div className="mb-2">
            <label htmlFor="password">Password Confirmation</label>
            <input type="password" value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)} 
              placeholder="Enter Password Confirmation" className="form-control"/>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>

          <Link to='/' href="">Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Register