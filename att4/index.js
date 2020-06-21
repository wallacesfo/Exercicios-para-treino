const rs= require('readline-sync');

console.log('Vamos descobrir seu signo?')

let dia = rs.question('qual é o dia do seu aniversário? ')

let mes = rs.question('qual é o mes do seu aniversário?')   

if ((dia >= 21 && mes == 3) || dia <= 19 && mes == 4){
    console.log('seu aniversário é XX e seu signo é Aries')
}
else if ((dia >= 20 && mes == 04) || dia <= 20 && mes == 05){
    console.log('seu aniversário é XX e seu signo é Touro')
}
else if ((dia >= 21 && mes == 04) || dia <= 21 && mes == 06){
    console.log('seu aniversário é XX e seu signo é Gêmeos')
}
else if ((dia >= 22 && mes == 06) || dia <= 22 && mes == 07){
    console.log('seu aniversário é XX e seu signo é Cancêr')
}
else if ((dia >= 23 && mes == 07) || dia <= 22 && mes == 08){
    console.log('seu aniversário é XX e seu signo é Leão')
}
else if ((dia >= 23 && mes == 08) || dia <= 22 && mes == 09){
    console.log('seu aniversário é XX e seu signo é Virgem')
}
else if ((dia >= 23 && mes == 09) || dia <= 22 && mes == 10){
    console.log('seu aniversário é XX e seu signo é Libra')
}
else if ((dia >= 23 && mes == 10) || dia <= 21 && mes == 11){
    console.log('seu aniversário é XX e seu signo é Escorpião')
}
else if ((dia >= 22 && mes == 11) || dia <= 21 && mes == 12){
    console.log('seu aniversário é XX e seu signo é Sargitário')
}
else if ((dia >= 22 && mes == 12) || dia <= 19 && mes == 01){
    console.log('seu aniversário é XX e seu signo é capricórnio')
}
else if ((dia >= 20 && mes == 01) || dia <= 18 && mes == 02){
    console.log('seu aniversário é XX e seu signo é Aquário')
}
else if ((dia >= 19 && mes == 02) || dia <= 20 && mes == 03){
    console.log('seu aniversário é XX e seu signo é Peixes')
}









