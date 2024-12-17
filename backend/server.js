require('dotenv').config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./database/db");
const userRoutes = require("./routes/userRoutes");
const passport = require("./config/passaport");

const app = express();

app.use(passport.initialize());

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/users", userRoutes);

const PORT = 8585;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    await sequelize.sync();
    console.log('All models were synchronized successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start the server:', error);
  }
};

startServer();
