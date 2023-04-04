var array = [];
array.push(function(){
  console.log("hello word")  
});
array.push(function(){
    console.log("hello word 1")  
});
array.push(function(){
  console.log("hello word 2")  
});

// for (let i = 0; i < array.length; i++) {
//     array[i]();//solo funciona si todo es una funcion 
// };

var i = 1;
array.forEach(element => {
    element(i);
    i++;
});