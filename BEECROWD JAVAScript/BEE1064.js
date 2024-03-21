var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var cont = 0
var soma = 0
for (var c = 0; c <=5;c++){
    var valor = parseFloat(lines.shift())
    if (valor > 0 ){
         cont = cont + 1
         soma = soma  + valor 
    }
    
}

console.log(`${cont} valores positivos`)
    console.log(`${(soma/cont).toFixed(1)}`)