import React from "react";
import '../assets/style.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { login } from '../api';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/home')
    } catch (error) {
      alert('service error');
      console.error(error);
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form-container p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
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

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>

          <Link to='/register'>Register</Link>
        </form>
      </div>
    </div>
  )
}

export default Login