const rs= require('readline-sync');

let pergunta1 = rs.question('Qual o numero do seu voo? ')

let pergunta2 = rs.question('Qual fileira você deseja se sentar? (A, B, C, D ou F?) ')

console.log(`Seu vôo é ${pergunta1} e sua fileira é na ${pergunta2}`)