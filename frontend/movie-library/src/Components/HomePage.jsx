import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import GenresDropdown from './Genre/GenresDropdown';

const HomePage = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [movies, setMovies] = useState([]); 


  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:8585/movies');
      const data = await response.json();
      setMovies(data); 
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies(); 
  }, []);

  const handleLogout = () => {
    console.log("logut");
    localStorage.removeItem('token');
    navigate('/login');
  };

  const ContentRow = ({ title, items }) => (
    <div className="content-row">
      <h2>{title}</h2>
      <div className="row-posters">
        {items.map((item) => (
          <div key={item.id} className="poster-wrapper">
            <img src={item.imgUrl} alt={item.title} className="row-poster" />
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
        <button onClick={() => navigate('/add-movie')} className="nav-button">
            Add Movie
          </button>
          <a href="#home">Home</a>
          <GenresDropdown />
        </div>
        <div className="nav-right">
          <button
            className="nav-button children-btn"
            onClick={() => setShowLogoutModal(true)}
          >
            Logout
          </button>
          <button className="nav-button">👤</button>
        </div>
      </nav>

      <div className="content">
        <ContentRow title="Continue Watching" items={movies} />
        <ContentRow title="My List" items={movies} />
        <ContentRow title="Popular on Netflix" items={movies} />
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
