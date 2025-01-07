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


router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const ratings = await Rating.findAll({
      where: { userId }
    });
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user ratings", error: error.message });
  }
});

module.exports = router;
