const rs= require('readline-sync');

console.log('Vamos Calcular a aréa do seu quadrado!')

let lado1 = rs.question("Informe o lado do seu quadrado em metros: ")

lado1 = Number(lado1)

let resultado = lado1 * lado1 //lado x lado

console.log(`A Surperficie do seu quadrado é ${resultado} Metros quadrados`)
