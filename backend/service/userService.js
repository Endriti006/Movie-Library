const bcrypt = require("bcrypt");
const User = require("../models/User");

const getAllUsers = async () => {
  try {
    return await User.findAll({ attributes: { exclude: ["password"] } });
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    return await User.findByPk(id, { attributes: { exclude: ["password"] } });
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
};

const addUser = async (userData) => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return await User.create({ ...userData, password: hashedPassword });
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

module.exports = { getAllUsers, getUserById, addUser };
