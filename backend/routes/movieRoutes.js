const express = require("express");
const {
  createMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

const router = express.Router();


router.post("/", createMovie);

router.get("/", getAllMovies);

router.put("/:id", updateMovie);


router.delete("/:id", deleteMovie);

module.exports = router;
