const {Sequelize, DataTypes} = require("sequelize");
const UserDataModel = require("./models/User.js");


const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER,
    '', {
        dialect: 'mysql',
        host: process.env.DB_HOST,
});

const User = UserDataModel(sequelize, DataTypes);

// User.create({ email: "test@test.com" , password:"123456"});

// User.bulkCreate([
//   {
//     first_name: "saul",
//     last_name: "pinto",
//     email: "Saul@gmail.com",
//     password: "123456",
//     adress:"funchal",
//     phone_number: 918222333
//   },
// ]);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables created");
  })
  .then(function () {
    return User.findAll();
  })
  .then(function (users) {
    console.log(users);
  });

module.exports = {
  User
};
