var myLogModule = require('./log.js');
myLogModule.info('node.js started');

var person = require('./person.js');
var person1 = new person('james','bond');
var person2 = new person('mary','alves');

console.log(person1.fullName());