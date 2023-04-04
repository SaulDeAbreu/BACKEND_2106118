function calculateGrade(gp,gt){
    var grade = gp * 0.6 + gt * 0.4;
    if(grade >= 9.5)
        console.log('APROVADO')
    else
        console.log('REPROVADO')
}
var status = (calculateGrade(12,16));
console.log(status);

var gg = 12;
calculateGrade(12,16);
calculateGrade(12,gg);

function nomeMes(mesNumero){
    var listMes=['janeiro','febreirio','março','abril','maio','junio','julhio','agosto','setembro','outubro','novembro','dezembro']
    // if(mesNumero == listMes[mesNumero-1] );
    console.log(listMes[mesNumero-1]); 
}
nomeMes(1);
nomeMes(12);

// clonar este repositorio y borrar el otro

// ejercio 7
function calculadora (n1,operador,n2){
    if (operador == '+'){
        var result=n1+n2;
        console.log(result);
    }
    else if(operador == '*'){
        var result = n1 * n2;
        console.log(result);
    }
    else if(operador == '-'){
        var result = n1 - n2;
        console.log(result);
    }
    else if (operador == '/'){
        var result = n1 / n2;
        console.log(result);
    }
    else if (operador == '^'){
        var result = n1 ** n2;// cambiarlo por el math 
        console.log(result);
    }
}
// function calculadora_1 (n1,operador,n2){
//     if (operador == '+'){
//         return n1+n2;
//     }
// function calculadora_2 (n1,operador,n2){
//     var res = 0;
//     if (operador == '+'){
//         result=n1+n2;
//         return result;
//     }

// //aula 02/03
// for (let i = 0; i < 5; i + 5) {
//     consol.log(i)    
// }

console.log(calculadora(1,'+',5));
console.log(calculadora(3,'*',2));
console.log(calculadora(1,'-',5));
console.log(calculadora(5,'/',5));
console.log(calculadora(2,'^',5));


// ejercicio 9
function multi (){
    var i = 0;
    while (i < 20 ){
        if (i % 5 == 0 )
        console.log(i);
        i ++;
    }
}
multi()// no hace falta el console.log porque ya tiene uno dentro de la funcion por lo tanto ya se va imprimir 

// function ejercicio9 (){ // corregir 
//     var numero = 0;
//     var soma = 0;
//     while (n <= 101){
//         n ++;
//         soma += n;
//     } 
//     return soma
// }
// console.log(ejercicio9())

function ejercicio10 (i){ // corregir 
    var suma = 0;
    var fact = 1;
    while (i > 0){
        fact = i ** (--i);
        --i    
    }
}
function ejercicio10_for (n){
    var fact = 1;
    for (let i = 2; i <= n; i++){ // se = a 2; se hace asi porque el 0 no daria y el uno no hace diferencia 
        fact*=i;
    }
    return fact 
}
console.log(ejercicio10(7))

function max(numbers) {
    var maxNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
    return maxNumber;
    }
function min(numbers) {
    var minNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {      // length quantos elementos tiene una lista
      if (numbers[i] < minNumber) {
        minNumber = numbers[i];
      }
    }
    return minNumber;
  }

function media(array){
    var soma =0;
    for (let i = 0; i < array.length;i++){
        soma += array[i];
    }
    return soma / array.length;
  }
console.log(media([1,4,5,2,0]))

// para corrrer el programa-> node./index.js