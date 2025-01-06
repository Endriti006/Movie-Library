const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");


const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: {
        msg: "Username must be unique",
      },
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: "Email must be unique",
      },
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Must be a valid email address",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Genre Model
const Genre = sequelize.define(
  "genres",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Genre name must be unique",
      },
    },
  },
  {
    timestamps: false,
  }
);


const Movie = sequelize.define(
  "movies",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Genre,
        key: "id",
      },
    },
    imgUrl: {
      type: DataTypes.STRING,  // Assuming you're storing a URL as a string
      allowNull: true,  // You can make it nullable if the image URL is optional
    },
  },
  {
    timestamps: false,
  }
);



const Rating = sequelize.define(
  "ratings",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Movie,
        key: "id",
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
  },
  {
    timestamps: true, 
  }
);


Genre.hasMany(Movie, { foreignKey: "genreId" });
Movie.belongsTo(Genre, { foreignKey: "genreId" });

Movie.hasMany(Rating, { foreignKey: "movieId" });
Rating.belongsTo(Movie, { foreignKey: "movieId" });

User.hasMany(Rating, { foreignKey: "userId" });
Rating.belongsTo(User, { foreignKey: "userId" });

module.exports = { User, Genre, Movie, Rating };
