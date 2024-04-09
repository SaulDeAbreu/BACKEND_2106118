// const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.INTEGER,
    },
  });
};
