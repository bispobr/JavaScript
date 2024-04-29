var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var soma = 0
var cont = 0
while (true){
    var nota = parseFloat(lines.shift())
    if (nota >=0.0 & nota <=10){
        soma+=nota
        cont+=1
    } else{
        console.log(`nota invalida`)
    }

    if (cont == 2){
        break;
    }
}

console.log(`media = ${(soma/2).toFixed(2)}`)