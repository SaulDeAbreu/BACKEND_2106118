const express = require("express");
const Sequelize = require("sequelize");
// const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 3000;
app.use(express.json());


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log("server is running");
});

const sequelize = new Sequelize("ficha9", "root", "", {
  dialect: "mysql",
});

sequelize
  .sync({force:false})
  .then(() => {
    console.log("connection has been established");
  })
  .catch((err) => {
    console.log("Unable to connect", err);
  });

const Person = sequelize.define("person", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull:false
  },
  profession: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
});

// comentar o bulkCreate para criar primero a tabela
// Person.bulkCreate([
//   { firstName: "Saul", lastName: "De Abreu", profession: "engineer", age: 23 },
//   { firstName: "Ricardo", lastName: "Sousa", profession: "farmer", age: 26 },
//   { firstName: "Roberto", lastName: "Moniz", profession: "photographer", age: 29,},
//   { firstName: "Jack", lastName: "Camara", profession: "physician", age: 31 },
//   { firstName: "Miguel", lastName: "Penaranda", profession: "pilot", age: 34 }
// ]);

app.get("/persons", function (req, res, next) {

  var id = req.query.id;
  if (id == undefined) {
    Person.findAll()//modificar 
    .then((people) => {
      res.json(people);
    })
    .catch((err) => {
      console.log("Error:", err);
      res.status(500).json({ error: "Error retrieving people" });
    });
  }
  else {
    Person.findByPK(id).then(res)
    .then((people) => {
      res.json(people);
    })
    .catch((err) => {
      console.log("Error:", err);
      res.status(500).json({ error: "Error retrieving people" });
    });
  }
});

app.post("/persons", function (req, res, next) {
  Person.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  })
    .then((people) => {
      res.json("id criado: " + people.id);
    })
    .catch((err) => {
      console.log("Error:", err);
      res.status(500).json({ error: "Error retrieving people" });
    });
});

app.delete("/persons", function (req, res, next) {
  var id = req.body.id;
  Person.destroy({
    where: { id: id },
  })
    .then((rowsAffected) => {
      res.json({ rowsAffected: rowsAffected });
    })
    .catch((err) => {
      console.log("Error:", err);
      res.status(500).json({ error: "Erro do servidor" });
    });
});

app.delete("/persons/:id", function (req, res, next) {
  var id = req.params.id;
  Person.destroy({
    where: { id: id },
  })
    .then((rowsAffected) => {
      res.json({ rowsAffected: rowsAffected });
    })
    .catch((err) => {
      console.log("Error:", err);
      res.status(500).json({ error: "Erro do servidor" });
    });
});
// parametro via query : localhost:3000/cars?id=2 . y se llama con var=req.query.id
app.delete("/persons/:id", function (req, res, next) {});

app.get("/persons/:Age/:Profession", function (req, res, next) {});

app.put("/persons/:id", function (req, res, next) {});

