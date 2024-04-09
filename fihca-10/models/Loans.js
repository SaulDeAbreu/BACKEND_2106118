// const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("loans", {
    loan_date: {
      type: DataTypes.DATE
    },
    return_date: {
      type: DataTypes.DATE
      // allowNull: false
    }
  });
};



