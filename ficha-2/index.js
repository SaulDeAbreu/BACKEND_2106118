// function massaCorporal_1(altura, peso) {
//   //hacerla despues en libras y en pulgadas(con una inteerfaz como la del projeto de programacion)
//   let imc = (peso / altura ** 2 );
//   let diferencia = 0;
//   switch (true) {
//     case "imcBaixo":
//       imc < 18.6;
//       console.log("o seu imc é baixo:", imc);
//       return;
//     case "imcNormal":
//       imc > 18.4 && imc <= 25;
//       console.log("o seu imc é normal:", imc);
//       return;
//     case "imcAlto":
//       imc >= 25 && imc <= 30;
//       console.log("o sue imc é alto:", imc);
//       return;
//     case "imcObeso":
//       imc >= 30;
//       console.log("o sue imc é super alto, tem obesidade:", imc);
//       return;

//     default:
//       throw new Error("os dados introduzidos não são validos");
//   }
// }
// console.log(massaCorporal(170, 70));

// function massaCorporal(altura, peso) {
// 	altura = altura / 100;
//   let imc = peso / (altura)** 2; //formula para calcular o indice de masa corporal
//   switch (true) {
//     case imc <= 18.5:
//       console.log("Seu IMC é baixo:", imc);
//       break;
//     case imc >= 18.6 && imc <= 25:
//       console.log("Seu IMC é normal:", imc);
//       break;
//     case imc >= 25 && imc <= 30:
//       console.log("Seu IMC é alto:", imc);
//       break;
//     case imc >= 30:
//       console.log("Você está obeso, seu IMC é:", imc);
//       break;
//     default:
//       throw new Error("Os dados introduzidos não são válidos");
//   }
// }
// // massaCorporal(210,195)
// // massaCorporal(170,70)
// // massaCorporal(160,195)
// // massaCorporal(169,57)
// function inverterFrase(frase) {
//   let fraseInvertida = "";
//   let palavraAtual = "";
//   for (let i = frase.length - 1; i >= 0; i--) {
//     if (frase[i] === " ") {
//       fraseInvertida += palavraAtual + " ";
//       palavraAtual = "";
//     } else {
//       palavraAtual = frase[i] + palavraAtual;
//     }
//   }
//   fraseInvertida += palavraAtual;

//   console.log(fraseInvertida);
// }
// // inverterFrase("Hoje é Domingo");
// function contarVocales(frase) {
//   let count = 0;
//   const vocales = "aeiouAEIOU"; //const asigna variables cuyo valor no cambia
//   for (let i = 0; i < frase.length; i++) {
//     if (vocales.includes(frase[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// function contarVocales2(frase) {
//   let count = 0;
//   const vocales = "aeiouAEIOU";

//   for (let i = 0; i < frase.length; i++) {
//     for (let j = 0; j < vocales.length; j++) {
//       if (frase[i] == vocales[j]) {
//         count++;
//         break;
//       }
//     }
//   }
//   return count;
// }
// function contarVocales3(str) {
// 	var count = 0;
// 	for (var i = 0; i < str.length; i ++){
// 		var c = str[i];
// 		if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' ) // en vez de poner todo en mayuscula mejor usar el '.toLowerCase() transforma todo en minuscula
// 			count ++;
// 	}
// 	return count
// }

// // console.log(contarVocales("prefiero javascript que python"));

// // dudas:1. es buena practica usar let en vez de var ; 2. const es bueno usarla ;3. como son los examenes

// // Escreva uma função que calcule o tempo de trabalho de um empregado. Dada a hora de entrada e a hora
// // de saída deve imprimir o tempo de trabalho. A empresa está aberta entre as 08:00:00 e as 18:00:00 e as
// // horas devem situar-se nesse intervalo
// function tempoTrabalho(hrEntrada,hrSaida) {
// 	if (hrEntrada > 8 && hrSaida < 18 && hrEntrada <= 24 && hrSaida <= 24) {//hacerlo con funcion de data
// 		let TempoTrabalhado = 0 ;
// 		let hrTrabalhadas = 24 - (hrEntrada + hrSaida )
// 		console.log('O tempo trabalhado é',hrTrabalhadas)
// 		return
// 	}else{
// 		console.log("Os dados introduzidos não são válidos");
// 		return
// 	}
// }
// // parseInt
// function tempoTrabalho2(hrEntrada,minEntrada,segEntrada,hrSaida,minSaida,segSaida) {
// 	if (hrEntrada > 08 && hrSaida < 18 && hrEntrada <= 24 && hrSaida <= 24) {
// 		var tempTrabalhado = 0;
// 		const hrTrabalhadas = 24 - (hrEntrada + hrSaida);
// 		const minTrabalhados = (minEntrada + minSaida ) - 60;
// 		const segTrabalhados = (segEntrada + segSaida ) - 60;
// 		console.log('o tempo trabalhado é de:', hrTrabalhadas,':',minTrabalhados,':',segTrabalhados)
// 	}else{
// 		console.log("Os dados introduzidos não são válidos");
// 		return;
// 	}
// }

// // functionTempTrabalhado3(he,me,se,hq,mq,sq);{
// // 	var totalTimeSecondsEntry = he * 3600 + me * 60 + se;//tse= total segundos entrada
// // 	var totalTimeSecondsQuit = hq * 3600 + mq * 60 + sq;
// // 	var total = totalTimeSecondsEntry - totalTimeSecondsQuit;
// // 	var remainder_h = total % 3600;
// // 	var h = (total - remainder_h )/ 3600;
// // 	var remainder_m = remainder_h % 60;
// // 	var m = (remainder_h - remainder_m) / 60;
// // 	var s = remainder_m;
// // 	console.log('o funcionario trabalho;',h,':',m,':',s);
// // 	}

// // var existe afuera de un for el let existe solo dentro de un ciclo ((?))
// // tempoTrabalho2(08,00,00,09,02,05)
// // tempoTrabalho3(08,00,00,09,02,05)
// // tempoTrabalho2(08,00,00,09,02,05)
// // tempoTrabalho(12,16)
// // tempoTrabalho(7,17)
// // tempoTrabalho(8,19)
// // tempoTrabalho(8,18)
// // tempoTrabalho(10,27)

// // function retangulos() {
// // 	var x = 0;
// // 	while (x >= 0) {
// // 		console.log(listaAsteriscos)
// // 		let opcao_escolhida = parseInt(prompt("opção escolhida:"));
// // 		if (opcao_escolhida == 1) {
// // 			console.log('fino')
// // 		}
// // 	}
// // }
// // let lineaMonificar = 0 ;
// // let listaAsteriscos = [
// // 	'********************************************************',
// // 	'********************************************************',
// // 	'********************************************************',
// // 	'********************************************************',
// // 	'********************************************************',
// // 	'********************************************************',
// // 	'********************************************************',
// // 	'********************************************************',
// // 	'********************************************************',
// // 	'********************************************************',
// // 	'********************************************************',
// // 	'********************************************************'];

// function triangulo(char, width, height) {
// 	var line = '';
// 	for (let i = 0; i < height; i ++){
// 		line += char;
// 		console.log(line);
// 	}
// }
// triangulo('+',10,10)
// triangulo('*',10,10)

// //curiosidade: estrategia de programação 'divide & lonquer'
// //'big 0 notation'
// // interacciones de un ciclo dentro de un ciclo se multiplica 'j' x 'i'
// function drawBox(size) {
// 	var box = '';
// 	for (let i = 0; i < size; i++) {
// 		for (let j = 0; j < size; j++) {
// 			if (i == 0 || i == size - 1 || j == 0 || j == size -1) {
// 				box+='*';
// 			}else{
// 				box+=' ';
// 			}
// 		}
// 		box+='\n';
// 	}
// 	console.log(box);
// }
// drawBox(10)

var student1 = { name: "pedro", grade: "16", Number: "213" };
var student2 = { name: "ani", grade: "9", Number: "214" };
var student3 = { name: "miguel", grade: "20", Number: "215" };
var student4 = { name: "martina", grade: "18", Number: "216" };
var student5 = { name: "jõao", grade: "19", Number: "217" };
var student6 = { name: "henrique", grade: "03", Number: "218" };
var student7 = { name: "sebastian", grade: "9.4", Number: "219" };
var student8 = { name: "jack", grade: "9.5", Number: "220" };
var student9 = { name: "robert", grade: "9.6", Number: "221" };
var student10 = { name: "robert", grade: "9.4", Number: "222" };

var studentsList = [];
studentsList.push(student1);
studentsList.push(student2);
studentsList.push(student3);
studentsList.push(student4);
studentsList.push(student5);
studentsList.push(student6);
studentsList.push(student7);
studentsList.push(student8);
studentsList.push(student9);
studentsList.push(student10);

var grade = studentsList[1].grade; //el punto grade se pone para bucar la nota y no asignar el valor a grade.
var grade = studentsList[1]["grade"]; // otra opcion.

// for (let i = 0; i < studentsList.length; i++) {
//   var p = studentsList[i];
//   var c = p.name;
//   console.log('nome:_',+ p.name + ',' + p.number + ',' + p.grade)
// }

// function print_grade(params) {

// }

function max(array) {
  var maxNumber = array[0].grade;
  var bestStudent = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].grade > maxNumber) {
      maxNumber = array[i].grade;
      bestStudent = array[i];
    }
  }
  return maxNumber;
}
console.log(max(studentsList));

function min(array) {
  var minNumber = 0;
  var worstStudent = array[0];
  for (let i = 0; i < array.length; i++) {
    var grade = array[i].grade;
    if (array[i] < minNumber) {
      minNumber = array[i].grade;
      bestStudent = array[i];
    }
  }
  return min;
}
// console.log(min(studentsList));

function media(studentsList) {
  var soma = 0;
  for (let i = 0; i < studentsList.length; i++) {
    soma += studentsList[i].grade;
  }
  return soma / studentsList.length;
}
console.log(media(studentsList));

function closestToAverage(studentsList) {
  var avg = media(studentsList);
  var min = avg;
  var student = studentsList[0];
  for (let i = 0; i < studentsList.length; i++) {
    var diff = Math.abs(avg - studentsList[i].grade);
    if (diff < min) {
      min = diff;
      student = studentsList[i];
    }
  }
  return student;
}
console.log(closestToAverage(studentsList))

function WorstStudent(studentsList) {
  for (let i = 0; i < studentsList.length; i++) {
    var wStudent = studentsList[i].grade;
    if (wStudent < 9.5) {
      console.log(studentsList[i].grade)
    }    
  }
  return
}
// console.log(WorstStudent(studentsList))

function BestStudent(studentsList) {
  for (let i = 0; i < studentsList.length; i++) {
    var bStudent = studentsList[i].grade;
    if (bStudent >= 9.5) {
      console.log(studentsList[i].grade)
    }    
  }
  return
}
console.log(BestStudent(studentsList))



// var s = array[1];//s == student
    // var g = s.grade;//g == grade
    // var grade = array[i].grade; //es igual a las dos lineas de arriba