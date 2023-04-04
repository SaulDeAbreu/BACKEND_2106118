// events.login = [];//opcion 1
// events["logout"]=[];// opcion 2 
// var n = "ban";
// events [type] = []//opcion 3 

// var person = {name:"rick",age:23,gender:"masculine"};
// var personJSON = JSON.stringify(person);
// // console.log(person);
// // console.log(personJSON);
// var str = '{"name":"sebastian","age":23,"gender":"masculine"}';
// var personOBJ = JSON.parse(str);

// var p1 = new Person("rick","sousa");
// p1.age = 23;
// var p2 = new Person("ana","abreu");
// console.log(person);
// console.log(p1.greet());
// console.log(p1.age)



var Person = require ("./person");
var config = require ("./config");
// myEmitter.on("LOGIN" ,function(){
//     console.log("LOGIN 1")
// });
// myEmitter.emit("LOGIN" ,function(){
//     console.log("LOGIN 2") //== console.log(config.events.LOGIN)
// });
// Emitter.emit("LOGIN")

var Emitter = require ("./emitter");
var myEmitter = new Emitter();
myEmitter.on("LOGIN" ,function(){
    console.log("LOGIN 1")
});
myEmitter.emit("LOGIN" ,function(){
    console.log("LOGIN 2") 
});
Emitter.emit("LOGIN")