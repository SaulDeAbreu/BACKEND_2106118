var express = require('express');
var router = express.Router();
var mysql =require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'projeto1_backend',
})

// IV.
router.put('/comentarios/:id', function(req, res, next) {
  var id = req.params.id;
  connection.query('SELECT comments FROM rentals WHERE rentals_id = ?', id, (err, results) => {
    if (err) {
      res.status(500).send('Error na consulta de SQL');
    } else if (Object.keys(req.body).length == 0) {
      res.status(404).send('O body esta vazio, insira um comentario');
    } else if (results.length == 0) {
      res.status(400).send('El ID ' + id + ' no existe');
    } else {
      var currentComment = results[0].comments;
      var updatedComment = currentComment + ', ' + req.body.comments;
      
      connection.query('UPDATE rentals SET comments = ? WHERE rentals_id = ?', [updatedComment, id], (err) => {
        if (err) {
          res.status(500).send('Error al actualizar el comentario');
        } else {
          connection.query('SELECT comments FROM rentals WHERE rentals_id = ?', [id], (err, results) => {
            if (err) {
              res.status(500).send('Error en la consulta SQL');
            } else {
              var commentResult = {
                comments: results[0].comments
              };
              res.status(200).send(commentResult);
            }
          });
        }
      });
    }
  });  
});




module.exports = router;

