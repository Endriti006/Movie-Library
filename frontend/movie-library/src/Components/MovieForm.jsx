// MovieForm.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieForm.css';

const MovieForm = () => {
    const [movieData, setMovieData] = useState({
        title: '',
        description: '',
        releaseDate: '',
        genreId: '',
        imgUrl: '',
        trailerUrl: '' // Add this line
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [genres, setGenres] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch('http://localhost:8585/genres/');
                const data = await response.json();
                setGenres(data);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('http://localhost:8585/movies', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(movieData),
            });

            const json = await response.json();

            if (!json.id) {
                throw new Error('Failed to create movie');
            }

            navigate(`/movies/${json.id}`);
        } catch (err) {
            setError('Failed to create movie. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="movie-form">
                <h1>Add New Movie</h1>
                
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        required
                        type="text"
                        value={movieData.title}
                        onChange={(e) => setMovieData({ ...movieData, title: e.target.value })}
                        placeholder="Enter movie title"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={movieData.description}
                        onChange={(e) => setMovieData({ ...movieData, description: e.target.value })}
                        placeholder="Enter movie description"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="releaseDate">Release Date</label>
                    <input
                        id="releaseDate"
                        type="date"
                        required
                        value={movieData.releaseDate}
                        onChange={(e) => setMovieData({ ...movieData, releaseDate: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <select
                        id="genre"
                        value={movieData.genreId}
                        onChange={(e) => setMovieData({ ...movieData, genreId: e.target.value })}
                        required
                    >
                        <option value="">Select a genre</option>
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="imgUrl">Image URL</label>
                    <input
                        id="imgUrl"
                        type="url"
                        required
                        value={movieData.imgUrl}
                        onChange={(e) => setMovieData({ ...movieData, imgUrl: e.target.value })}
                        placeholder="Enter image URL"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="trailerUrl">Trailer URL</label>
                    <input
                        id="trailerUrl"
                        type="url"
                        value={movieData.trailerUrl}
                        onChange={(e) => setMovieData({ ...movieData, trailerUrl: e.target.value })}
                        placeholder="Enter trailer URL"
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={isSubmitting ? 'submitting' : ''}
                >
                    {isSubmitting ? 'Adding Movie...' : 'Add Movie'}
                </button>
            </form>
        </div>
    );
};

export default MovieForm;