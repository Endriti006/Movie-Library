const express = require("express");
const { getAllGenres, createGenre, deleteGenre } = require("../controllers/genreController");

const router = express.Router();

router.post("/", createGenre);

router.get("/", getAllGenres);

router.delete("/:id", deleteGenre);

module.exports = router;
