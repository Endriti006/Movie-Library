const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('movie-library', 'root', '', {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
});

module.exports = sequelize;