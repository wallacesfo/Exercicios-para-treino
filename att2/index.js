const rs= require('readline-sync');

let pergunta1 = rs.question('Você usa máscara ao sair de casa? ')

    if (pergunta1.toLocaleLowerCase() == 'sim'){
    console.log ('muito bem!!!')
    }else{
    console.log('Você Tem que usar máscara truta!!!!!')
    }


let pergunta2 = rs.question('você lava as mãos frequentemente? ')

    if (pergunta2.toLocaleLowerCase() == 'sim'){
    console.log ('muito bem!!!')
    }else{
    console.log('Você Tem que usar máscara truta!!!!!')
    }
