import React, { useState } from 'react';
import axios from 'axios';
import '../css/ForgetPassword.css'
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  const handleSubmit =  (e) => {
    e.preventDefault();
     axios.post('https://password-server-7jsh.onrender.com/forgot-password', { email })
     .then(res => {
     console.log(res.data)
     }).catch(err => console.log(err))
  
    }
  return (
    <div className="forgot-password-form">
    <h2>Forgot Password</h2>
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
      <button type="submit">Send Reset Link</button>
    </form>
  </div>
  )
}

export default ForgetPassword
