import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <h1>Welcome</h1>
            <button onClick={handleLogout} className="logout-btn">
                Logout
            </button>
        </nav>
    );
};

export default Navbar;
