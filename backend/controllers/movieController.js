const { Movie, Genre } = require("../models/User");

const createMovie = async (req, res) => {
  const { title, description, releaseDate, genreId, imgUrl, trailerUrl } = req.body;

  if (!title || !releaseDate || !genreId) {
    return res.status(400).json({ message: "Title, release date, and genre ID are required" });
  }

  try {
    const genre = await Genre.findByPk(genreId);
    if (!genre) {
      return res.status(404).json({ message: "Genre not found" });
    }

    const newMovie = await Movie.create({ title, description, releaseDate, genreId, imgUrl, trailerUrl });
    res.status(201).json(newMovie);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error creating movie", error: error.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll({
      include: {
        model: Genre,
        attributes: ["id", "name"],
      },
    });
    res.status(200).json(movies);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error fetching movies", error: error.message });
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, description, releaseDate, genreId, imgUrl, trailerUrl } = req.body;

  try {
    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    if (genreId) {
      const genre = await Genre.findByPk(genreId);
      if (!genre) {
        return res.status(404).json({ message: "Genre not found" });
      }
    }

    await movie.update({ title, description, releaseDate, genreId, imgUrl, trailerUrl });
    res.status(200).json(movie);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error updating movie", error: error.message });
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    await movie.destroy();
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error deleting movie", error: error.message });
  }
};

const getMoviesByGenre = async (req, res) => {
  const { genreId } = req.params;

  try {
    const movies = await Movie.findAll({
      where: { genreId },
      include: {
        model: Genre,
        attributes: ["id", "name"],
      },
    });

    if (movies.length === 0) {
      return res.status(404).json({ message: "No movies found for this genre" });
    }

    res.status(200).json(movies);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error fetching movies by genre", error: error.message });
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMoviesByGenre,
};