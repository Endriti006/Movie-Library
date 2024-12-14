const router = require("express").Router();
const userService = require("../service/userService");

// Get user by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userService.getUserById(+id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({
      success: false,
      message: "Error getting user",
    });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching users",
    });
  }
});

// Add a new user
router.post("/", async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await userService.addUser(userData);
    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({
      success: false,
      message: "Error adding user",
    });
  }
});

module.exports = router;
