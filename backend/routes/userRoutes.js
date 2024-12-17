const express = require('express');
const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUserByUsername,
  updateUserByUsername,
  deleteUserByUsername,
} = require("../controllers/userController");
const { loginUser } = require("../controllers/authController");
const passport = require("passport");

// Login route (public)
router.post("/login", loginUser);

// Protected route for getting all users (requires JWT authentication)
router.get("/", passport.authenticate("jwt", { session: false }), getAllUsers);

// Route to create a new user
router.post("/", createUser);

// Route to get user by username
router.get("/:username", getUserByUsername);

// Route to update user by username
router.put("/:username", updateUserByUsername);

// Route to delete user by username
router.delete("/:username", deleteUserByUsername);

module.exports = router;
