const { query } = require('express');
var express = require('express');
var mysql =require('mysql');
var router = express.Router();
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'BackEndFicha7',
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM persons',(err,results,req)=>{
    res.send(results);
  })
});
// router.get('/:id', function(req, res, next) {
//     const id = req.params.id;
//     connection.query('SELECT * FROM persons WHERE id = ?', [id], (err, results) => {
//       res.send(results);
//     });
// });

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  connection.query('SELECT * FROM persons WHERE id = ?', id, (err, results) => {
    res.send(results);
  });
});
router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  connection.query('DELETE FROM persons WHERE id = ?', id, (err, results) => {
    res.send(results);
  });
});
router.get('/:Age/:Profession', function(req, res, next) {
  var Age = req.params.Age;
  var Profession = req.params.Profession;
  connection.query('SELECT * FROM persons WHERE Age = ? AND Profession = ? ', [Age,Profession], (err, results) => {
    res.send(results);
  });
});
router.post('/', function(req, res, next) {
  var person = req.body;
  connection.query('INSERT INTO persons SET ?',person, (err, results) => {
    res.send(results);
  });
});

router.put('/:id', function(req, res, next) {
  var id = req.params.id;
  var person = req.body;
  connection.query('UPDATE persons SET ? WHERE id = ?', [person,id], (err, results,fields) => {
    res.send(results);
    if (err) {
      res.status(500).end("error while ");
    }
    else if (results.affectedRows != 0) {
      res.Status(404).end("id not found");
    }
    else{
      res.send(send)
    }
  });
});






// app.post('/post/:id', (req, res) => {
//     if (Object.keys(req.body).length == 0) {
//       res.status(400).send("details not valid")
//     }
//     else{
//       var person = req.body;
//       var size = Object.keys(content).length
//       var id = size + 1 ;
//       person.id = id ;
//       content["person" + id ] = person;
//       writeFile("/.person.json",JSON.stringify(content));
//       res.send("ID: " + id); 
//     }
//   })

// app.delete('/delete/:id', (req, res) => { 
//     var idDelete = req.params.id;
//     var person = content["person" + idDelete]
  
//     if (person == undefined) {
//       res.send(undefined + " ");
//     }
//     else{
//       delete content["person" + idDelete];
//     //  writeFile("/.person.json",JSON.stringify(content));
//     connection.query('SELECT * FROM persons WHERE id = ?', [id], (err, results) => {
//     res.send("id delete: " + idDelete);
//     }
//   })

module.exports = router;
