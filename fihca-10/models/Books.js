// const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("books", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_name: {
      type: DataTypes.STRING,
      // allowNull:false
    },
    publication_date: {
      type: DataTypes.DATE,
    },
    genre: {
      type: DataTypes.STRING,
    },
    available_copies: {
      type: DataTypes.STRING,
    },
  });
};
