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

  /**
   * @swagger
   * definitions:
   *   Person:
   *     required:
   *       - firstname
   *       - lastname
   *     properties:
   *       firstname:
   *         type: string
   *       lastname:
   *         type: string
   *       age:
   *         type: int
   *       profession:
   *         type: string
   */


/* GET users listing. */

/**
 * @openapi
 * /persons:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM persons',(err,results,req)=>{
    res.send(results);
  })
});





/**
 * @swagger
 * /person/{id}:
 *   get:
 *      tags:
 *        - Person 
 *      summary: Reads a single person by id
 *      description: Return a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: id
 *          description: Person's id
 *          in: path
 *          required: true
 *          type: int
 *      responses:
 *        200:
 *          description: A single person
 *          schema:
 *              $ref: '#/definitions/Person'
 *      
 */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  connection.query('SELECT * FROM persons WHERE id = ?', id, (err, results) => {
    res.send(results);
  });
});


/**
 * @swagger
 * /person/{id}:
 *   delete:
 *      tags:
 *        - Person 
 *      summary: Reads and delete a single person by id
 *      description: Return a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: id
 *          description: Person's id
 *          in: path
 *          required: true
 *          type: int
 *      responses:
 *        200:
 *          description: A single person
 *          schema:
 *              $ref: '#/definitions/Person'
 *      
 */
router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  connection.query('DELETE FROM persons WHERE id = ?', id, (err, results) => {
    res.send(results);
  });
});

/**
 * @swagger
 * /person/{Age}:/{Profession}:
 *   get:
 *      tags:
 *        - Person 
 *      summary: Reads single person by age and profession 
 *      description: Return a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: id
 *          description: Person's id
 *          in: path
 *          required: true
 *          type: int
 *      responses:
 *        200:
 *          description: A single person
 *          schema:
 *              $ref: '#/definitions/Person'
 *      
 */
router.get('/:Age/:Profession', function(req, res, next) {
  var Age = req.params.Age;
  var Profession = req.params.Profession;
  connection.query('SELECT * FROM persons WHERE Age = ? AND Profession = ? ', [Age,Profession], (err, results) => {
    res.send(results);
  });
});



/**
 * @swagger
 * /person:
 *   post:
 *      tags:
 *        - Person 
 *      summary: Reads single person 
 *      description: Return a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: id
 *          description: Person's id
 *          in: path
 *          required: true
 *          type: int
 *      responses:
 *        200:
 *          description: A single person
 *          schema:
 *              $ref: '#/definitions/Person'
 *      
 */
router.post('/', function(req, res, next) {
  var person = req.body;
  connection.query('INSERT INTO persons SET ?',person, (err, results) => {
    res.send(results);
  });
});

/**
 * @swagger
 * /person/{id}:
 *   put:
 *      tags:
 *        - Person 
 *      summary: put a single person with the id
 *      description: Return a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: id
 *          description: Person's id
 *          in: path
 *          required: true
 *          type: int
 *      responses:
 *        200:
 *          description: A single person
 *          schema:
 *              $ref: '#/definitions/Person'
 *      
 */
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







module.exports = router;
