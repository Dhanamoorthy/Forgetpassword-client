import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://password-server-7jsh.onrender.com/login', { email, password });
          // Handle login success
          navigate('/dashboard');
        } catch (error) {
          console.error('Login error:', error);
          // Handle login failure
        }
      };
  return (
    <div className="login-form">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    <div className="links">
    <Link to="/forgot-password">Forgot Password</Link>
    <p>Dont have an account   <Link to="/register">Register</Link></p>
   
    </div>
  </div>
);
};
  


export default Login
