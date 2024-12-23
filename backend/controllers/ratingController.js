const { Rating, Movie, User } = require("../models/User"); 


const createRating = async (req, res) => {
  const { userId, movieId, rating, comment } = req.body;

  if (!userId || !movieId || !rating) {
    return res.status(400).json({ message: "userId, movieId, and rating are required" });
  }

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }


    const newRating = await Rating.create({ userId, movieId, rating, comment });
    res.status(201).json(newRating);
  } catch (error) {
    res.status(500).json({ message: "Error creating rating", error: error.message });
  }
};


const getAllRatings = async (req, res) => {
  try {
    const ratings = await Rating.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "name", "username"],
        },
        {
          model: Movie,
          attributes: ["id", "title"],
        },
      ],
    });
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ratings", error: error.message });
  }
};


const updateRating = async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;

  try {
    const existingRating = await Rating.findByPk(id);

    if (!existingRating) {
      return res.status(404).json({ message: "Rating not found" });
    }


    await existingRating.update({ rating, comment });
    res.status(200).json(existingRating);
  } catch (error) {
    res.status(500).json({ message: "Error updating rating", error: error.message });
  }
};


const deleteRating = async (req, res) => {
  const { id } = req.params;

  try {
    const rating = await Rating.findByPk(id);

    if (!rating) {
      return res.status(404).json({ message: "Rating not found" });
    }

    await rating.destroy();
    res.status(200).json({ message: "Rating deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting rating", error: error.message });
  }
};

module.exports = {
  createRating,
  getAllRatings,
  updateRating,
  deleteRating,
};
