// var myLogModule = require('./log.js');
// myLogModule.info('node.js started');

// var person = require('./person.js');
// var person1 = new person('james','bond');
// var person2 = new person('mary','alves');

// console.log(person1.fullName());

var myUtilsModule = require('./ArrayUtils');
const ArrayUtils = require('./ArrayUtils');
// var Empty = myUtilsModule.isEmpty(array);
var swap = ArrayUtils.swap([1,2,3,4,5,6],0,2);
// console.log(Empty)

// console.log(myUtilsModule.)
// var array = [1,2,3,4,5,6];
console.log(swap);
var array1 = [1,2,4];
var array5 = [5,6,8];
console.log(ArrayUtils.concatenate(array1,array5))

function person2(firstname){
    this.firstname = firstname;
}
var p = new person2 ("david");
var x = 0 ;