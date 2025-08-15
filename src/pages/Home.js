import React from "react";
import { removeToken } from '../auth';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate('/login');
    };

    return(
        <div className="home-container">
            <h1>Welcome to the Home Page 🎉</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};
export default Home;