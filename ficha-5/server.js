const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000 //local host 30000 numero da porta

//middleware que converte o body para json 
app.use(express.json());

function writeFile (path,data) { // path=camino do fichero 
  fs.writeFileSync(path, data);
}

function readFile(path){
  var content = fs.readFileSync(path);
  return JSON.parse(content);
}
var content = readFile('./persons.json');//converte en json 

app.get('/', (req, res) => {//get é um npoint 
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
    res.send(content)
})

// app.post('/users', (req, res) => {
//     // res.send(req.body.id + " ") 
//     res.send(req.body.firstname) 
// })

app.post('/users', (req, res) => {
  if (Object.keys(req.body).length == 0) {
    res.status(400).send("details not valid")
  }
  else{
    var person = req.body;
    var size = Object.keys(content).length
    var id = size + 1 ;
    person.id = id ;
    content["person" + id ] = person;
    writeFile("/.person.json",JSON.stringify(content));
    res.send("ID: " + id); 
  }
})


app.delete('/users/:id', (req, res) => { 
  var idDelete = req.params.id;
  var person = content["person" + idDelete]

  if (person == undefined) {
    res.send(undefined + " ");
  }
  else{
    delete content["person" + idDelete];
    writeFile("/.person.json",JSON.stringify(content));
    res.send("id delete: " + idDelete);
  }
})

app.get('/users/:id', (req, res) => { //corregir
  var idShow = req.params.id ;
  var person = content["person" + idShow ]
  if (person == undefined) {
    res.status(404).send("ID not found")
  }
  else{
    res.send(person)
  }
})

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = content["person" + id];
  if (person == undefined) {
    res.send( " id not found");
  }
  else{
    content["person" + id] = req.body;
    content["person" + id].id = id;
    writeFile("/.person.json",JSON.stringify(content));
    res.send(content);
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
