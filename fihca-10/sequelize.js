const {Sequelize,DataTypes} =require('sequelize')
// autetificacion

// const Sequelize = require("sequelize");
const UserDataModel = require("./models/Users");
const BookDataModel = require("./models/Books");
const LoanDataModel = require("./models/Loans");

const sequelize = new Sequelize("ficha10", "root", "", {
  dialect: "mysql",
});

const User = UserDataModel(sequelize, DataTypes)
const Loan = LoanDataModel(sequelize, DataTypes);
const Book = BookDataModel(sequelize, DataTypes);

// define relations
User.hasMany(Loan);
Loan.belongsTo(User);

Book.hasMany(Loan, { onDelete: 'CASCADE' })
Loan.belongsTo(Book)


User.create({ name: "Test" });
Loan.bulkCreate(
    [
        {
            loan_date: "2000/12/23",
            User_Id: 1,
            bookID:1
        }
    ]
)
Book.bulkCreate([
  {
    title: "Cavalheiro da Dinamarca",
    author_name: "Saul",
    publication_date: "2000/12/23",
    genre: "Histori",
    available_copies: "x",
  },
]);
User.bulkCreate([
  {
    title: "Cavalheiro da Dinamarca",
    author_name: "Saul",
    publication_date: "2000/12/23",
    genre: "Histori",
    available_copies: "x",
  },
]);

sequelize.sync({ force: false })
  .then(() => {
    console.log("Database & tables created");
  })
  .then(function () {
    return User.findAll();
  })
  .then(function (persons) {
    console.log(persons);
  });

module.exports = {
    User,Loan,Book
}



/*notas
npm i sequelize - Instala el paquete Sequelize.
npm i mysql mysql2 - Instala los paquetes MySQL y MySQL2. (Puedes instalar ambos en el mismo comando separándolos por un espacio).
npm view pug - Muestra información sobre el paquete Pug. Este comando no instala el paquete, solo muestra detalles sobre él. Si deseas instalarlo, usa el siguiente comando.
npm i pug - Instala el paquete Pug.
npm express-generator - Instala el generador de aplicaciones Express.
npm express --view=pug - Crea una aplicación Express con el motor de vistas Pug. Asegúrate de que esto sea lo que deseas hacer, ya que el comando en tu pregunta tiene un error tipográfico. Debería ser --view=pug en lugar de --view==pug.
npm i 
------------------------------
//npm i sequelize
// npm i myslq ,mysql2
// 
// npm i express-generator
// express --view==pug
// npm i 
dot env
*/