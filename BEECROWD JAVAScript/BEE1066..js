var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var par = 0
var impar = 0
var pos = 0
var neg = 0
for (var c = 1; c<=5;c++){
    valor = lines.shift()
    if (valor % 2 == 0){
        par = par + 1
    } else {
        impar = impar + 1
    }

    if (valor > 0){
        pos = pos + 1
    }else if(valor < 0){
        neg = neg + 1
    }
}

console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${pos} valor(es) positivo(s)`)
console.log(`${neg} valor(es) negativo(s)`)