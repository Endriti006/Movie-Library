import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const continueWatching = [
    {
      id: 1,
      title: 'Friends',
      // Alternative URLs for Friends
      image: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
      // Backup: 'https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0OTE@._V1_.jpg'
    },
    {
      id: 2,
      title: 'Schitts Creek',
      image: 'https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg',
    },
    {
      id: 3,
      title: 'Big Bang Theory',
      image: 'https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg',
    },
    {
      id: 4,
      title: 'Two and a Half Men',
      // Alternative URLs for Two and a Half Men
      image: 'https://m.media-amazon.com/images/M/MV5BMTcwMDU1MDExNl5BMl5BanBnXkFtZTYwMzU2Mjc4._V1_.jpg',
      // Backup: 'https://m.media-amazon.com/images/M/MV5BMzE3ZjE3NTItNjQyZS00MmRkLTg4MGItZjY5NmE2YzVlNGVlXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_.jpg'
    },
    {
      id: 5,
      title: 'Narcos',
      image: 'https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
    },
  ];
  
  // My List section
  const myList = [
    {
      id: 1,
      title: 'Comedians in Cars',
      image: 'https://m.media-amazon.com/images/M/MV5BMjE2Mjg1NzYxMl5BMl5BanBnXkFtZTgwNDg5NjY2NDE@._V1_.jpg',
    },
    {
      id: 2,
      title: 'South Park',
      image: 'https://m.media-amazon.com/images/M/MV5BOGE2YWUzMDItNTg2Ny00NTUzLTlmZGYtNWMyNzVjMjQ3MThkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    },
    {
      id: 3,
      title: 'The Big Short',
      image: 'https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
    },
    {
      id: 4,
      title: 'Abstract',
      image: 'https://m.media-amazon.com/images/M/MV5BMjM2NzUxOTI3MV5BMl5BanBnXkFtZTgwODkzMzQ0MjI@._V1_.jpg',
    },
    {
      id: 5,
      title: 'Magic Beyond Words',
      image: 'https://m.media-amazon.com/images/M/MV5BMTY5MDgyNTUxOF5BMl5BanBnXkFtZTcwNjY5NTc5Ng@@._V1_.jpg',
    },
    {
      id: 6,
      title: 'Inception',
      image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    },
  ];
  
  // Popular on Netflix section
  const popular = [
    {
      id: 1,
      title: 'The Bold Type',
      image: 'https://m.media-amazon.com/images/M/MV5BZDk3ZTliNzgtNDhlNy00MjctLWJkZjYtYWYwYjg4NjA2YTM2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    },
    {
      id: 2,
      title: 'Brooklyn Nine-Nine',
      image: 'https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg',
    },
    {
      id: 3,
      title: 'Suits',
      image: 'https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    },
    {
      id: 4,
      title: 'Pagglait',
      image: 'https://m.media-amazon.com/images/M/MV5BZTVlOGQ0NjctNjE4My00ZTcwLWI0YzctYTU0ZGI2NjJkYTBiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg',
    },
    {
      id: 5,
      title: 'Fresh Prince',
      image: 'https://m.media-amazon.com/images/M/MV5BOGUxOWQ4MzAtMmJjYS00M2U5LWEwZTAtYTc1YmZhNjg2NDRlXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
      id: 6,
      title: 'The Good Place',
      image: 'https://m.media-amazon.com/images/M/MV5BYmMxNjM0NmItNGU1Mi00OGMwLTkzMzctZmE3YjU1ZDE4NmFjXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg',
    },
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
          <a href="#genres">Genres</a>
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