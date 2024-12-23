const { Genre, Movie } = require("../models/User");


const createGenre = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Genre name is required" });
  }

  try {
    const newGenre = await Genre.create({ name });
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(500).json({ message: "Error creating genre", error: error.message });
  }
};


const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: "Error fetching genres", error: error.message });
  }
};

const deleteGenre = async (req, res) => {
  const { id } = req.params;

  console.log("ID to delete:", id);

  try {
    const genre = await Genre.findByPk(id);

    if (!genre) {
      console.log("Genre not found for ID:", id);
      return res.status(404).json({ message: "Genre not found" });
    }

    const associatedMovies = await Movie.findOne({ where: { genreId: id } });
    if (associatedMovies) {
      console.log("Cannot delete. Genre has associated movies.");
      return res.status(400).json({
        message: "Cannot delete genre as it has associated movies",
      });
    }

    await genre.destroy();
    res.status(200).json({ message: "Genre deleted successfully" });
  } catch (error) {
    console.error("Error during deletion:", error);
    res.status(500).json({ message: "Error deleting genre", error: error.message });
  }
};


module.exports = { getAllGenres, createGenre, deleteGenre };
