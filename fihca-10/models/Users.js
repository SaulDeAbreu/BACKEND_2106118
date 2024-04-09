// const { Sequelize, DataTypes } = require("sequelize");

//npm i sequelize
// npm i myslq ,mysql2
// npm view pug
// npm express-generator
// npm express --view==pug
// npm i 



module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    first_name: {
      type: DataTypes.STRING,
      //   allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      // allowNull:false
    },
    email: {
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
