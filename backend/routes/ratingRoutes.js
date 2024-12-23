const express = require("express");
const {
  createRating,
  getAllRatings,
  updateRating,
  deleteRating,
} = require("../controllers/ratingController");

const router = express.Router();


router.post("/", createRating);


router.get("/", getAllRatings);


router.put("/:id", updateRating);


router.delete("/:id", deleteRating);

module.exports = router;
