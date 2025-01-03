const express = require("express");
const {
  createMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMoviesByGenre,
} = require("../controllers/movieController");

const router = express.Router();

router.post("/", createMovie);
router.get("/", getAllMovies);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);
router.get("/genre/:genreId", getMoviesByGenre); 

module.exports = router;