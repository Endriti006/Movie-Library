import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const continueWatching = [
    { id: 1, title: 'Friends', image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Schitts Creek', image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Big Bang Theory', image: 'https://via.placeholder.com/300x200' },
    { id: 4, title: 'Two and a Half Men', image: 'https://via.placeholder.com/300x200' },
    { id: 5, title: 'Narcos', image: 'https://via.placeholder.com/300x200' },
  ];

  const myList = [
    { id: 1, title: 'Comedians in Cars', image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'South Park', image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'The Big Short', image: 'https://via.placeholder.com/300x200' },
    { id: 4, title: 'Abstract', image: 'https://via.placeholder.com/300x200' },
    { id: 5, title: 'Magic Beyond Words', image: 'https://via.placeholder.com/300x200' },
    { id: 6, title: 'Inception', image: 'https://via.placeholder.com/300x200' },
  ];

  const popular = [
    { id: 1, title: 'The Bold Type', image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Brooklyn Nine-Nine', image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Suits', image: 'https://via.placeholder.com/300x200' },
    { id: 4, title: 'Pagglait', image: 'https://via.placeholder.com/300x200' },
    { id: 5, title: 'Fresh Prince', image: 'https://via.placeholder.com/300x200' },
    { id: 6, title: 'The Good Place', image: 'https://via.placeholder.com/300x200' },
  ];

  const handleLogout = () => {
    console.log("logut")
    localStorage.removeItem('token');
    navigate('/login');
  };

  const ContentRow = ({ title, items }) => (
    <div className="content-row">
      <h2>{title}</h2>
      <div className="row-posters">
        {items.map((item) => (
          <div key={item.id} className="poster-wrapper">
            <img src={item.image} alt={item.title} className="row-poster" />
            <div className="poster-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="app">
      <nav className="navbar">
        <img src="netflix-logo.png" alt="Netflix" className="nav-logo" />
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#tvshows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#new">New & Popular</a>
          <a href="#mylist">My List</a>
        </div>
        <div className="nav-right">
          <button 
            className="nav-button children-btn"
            onClick={() => setShowLogoutModal(true)}
          >
            Logut
          </button>
          <button className="nav-button">🎁</button>
          <button className="nav-button">🔔</button>
          <button className="nav-button">👤</button>
        </div>
      </nav>

      <div className="content">
        <ContentRow title="Continue Watching for Uijaaaaa" items={continueWatching} />
        <ContentRow title="My List" items={myList} />
        <ContentRow title="Popular on Netflix" items={popular} />
      </div>

      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="logout-modal">
            <h2>Profile Options</h2>
            <div className="profile-options">
              <button className="profile-button">
                <span className="profile-icon">👤</span>
                <span>Switch Profile</span>
              </button>
              <button className="profile-button" onClick={handleLogout()}>
                <span className="profile-icon">🚪</span>
                <span>Logout</span>
              </button>
            </div>
            <button 
              className="close-modal"
              onClick={() => setShowLogoutModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;