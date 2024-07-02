import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/HomePage.css'

const Home = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };
  return (
    <div className="home-page">
            <h1>Welcome to Our Application</h1>
            <button className="login-button" onClick={handleLoginClick}>Login</button>
        </div>
  )
}

export default Home