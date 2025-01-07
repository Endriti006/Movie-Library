import React, { useState } from 'react';
import { Star } from 'lucide-react';
import './MovieCard.css';

const MovieCard = ({ movie, onRateMovie }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    if (onRateMovie) {
      onRateMovie(movie.id, value);
    }
  };

  const handleTrailerClick = () => {
    if (movie.trailerUrl) {
      window.open(movie.trailerUrl, '_blank');
    }
  };

  return (
    <div className="poster-wrapper" onClick={handleTrailerClick}>
      <img src={movie.imgUrl} alt={movie.title} className="row-poster" />
      <div className="poster-overlay">
        <h3>{movie.title}</h3>
        <div className="movie-info">
          <p className="release-date">{new Date(movie.releaseDate).getFullYear()}</p>
          <p className="genre">{movie.genreName}</p>
          <div className="rating-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="star-button"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => handleRating(star)}
              >
                <Star
                  className="star-icon"
                  size={16}
                  fill={(hoverRating || rating) >= star ? "gold" : "none"}
                  color={(hoverRating || rating) >= star ? "gold" : "gray"}
                />
              </button>
            ))}
            {rating > 0 && (
              <span className="rating-text">{rating}/5</span>
            )}
          </div>
          <p className="description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;