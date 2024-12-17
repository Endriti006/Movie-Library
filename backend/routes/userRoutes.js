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


router.post("/login", loginUser);


router.get("/", passport.authenticate("jwt", { session: false }), getAllUsers);


router.post("/", createUser);


router.get("/:username", getUserByUsername);


router.put("/:username", updateUserByUsername);


router.delete("/:username", deleteUserByUsername);

module.exports = router;
