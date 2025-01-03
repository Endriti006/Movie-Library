import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './HomePage.css';
import GenresDropdown from './Genre/GenresDropdown';
import MovieCard from './MovieCard';

const HomePage = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:8585/movies');
      const data = await response.json();
      setMovies(data);
      setFilteredMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleGenreSelect = async (genreId) => {
    setSelectedGenre(genreId);
  
    if (!genreId) {
      setFilteredMovies(movies); 
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8585/movies/genre/${genreId}`); 
      const data = await response.json();
      setFilteredMovies(data);
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const ContentRow = ({ title, items }) => {
    const handleRateMovie = async (movieId, rating) => {
      try {
        // Add your API call here to save the rating
        const response = await fetch(`http://localhost:8585/movies/${movieId}/rate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ rating }),
        });
        // Handle the response as needed
      } catch (error) {
        console.error('Error rating movie:', error);
      }
    };
  
    return (
      <div className="content-row">
        <h2>{title}</h2>
        <div className="row-posters">
          {items.map((item) => (
            <MovieCard 
              key={item.id} 
              movie={item} 
              onRateMovie={handleRateMovie}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <nav className="navbar">
        <img src="netflix-logo.png" alt="Netflix" className="nav-logo" />
        <div className="nav-links">
          <button onClick={() => navigate('/add-movie')} className="nav-button">
            Add Movie
          </button>
          <a href="#home">Home</a>
          <GenresDropdown onGenreSelect={handleGenreSelect} />
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
        <ContentRow 
          title={selectedGenre ? "Genre Movies" : "All Movies"} 
          items={filteredMovies} 
        />
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
              <button className="profile-button" onClick={handleLogout}>
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