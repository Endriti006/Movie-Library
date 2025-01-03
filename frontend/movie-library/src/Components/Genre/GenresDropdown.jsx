import React, { useState, useEffect, useRef } from 'react';
import './GenresDropdown.css';

const GenresDropdown = ({ onGenreSelect }) => {
  const [genres, setGenres] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchGenres();
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await fetch('http://localhost:8585/genres/');
      const data = await response.json();
      setGenres(data);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const handleGenreClick = (genreId) => {
    onGenreSelect(genreId);
    setIsOpen(false);
  };

  return (
    <div className="genres-dropdown" ref={dropdownRef}>
      <button className="genres-button" onClick={() => setIsOpen(!isOpen)}>
        Genres
        <svg
          className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="genres-menu">
          <div className="genres-grid">
            <a
              href="#"
              className="genre-item"
              onClick={(e) => {
                e.preventDefault();
                handleGenreClick(null);
              }}
            >
              All Movies
            </a>
            {genres.map((genre) => (
              <a
                key={genre.id}
                href="#"
                className="genre-item"
                onClick={(e) => {
                  e.preventDefault();
                  handleGenreClick(genre.id);
                }}
              >
                {genre.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenresDropdown;