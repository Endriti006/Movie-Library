
import React from 'react';
import Navbar from './Navbar';
import './ProtectedPage.css'; 

const ProtectedPage = () => {
    return (
        <div className="protected-page">
            <Navbar />
            <h2>Welcome to the protected page!</h2>
        </div>
    );
};

export default ProtectedPage;
