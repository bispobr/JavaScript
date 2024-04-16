var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var maior = 0
var pos = 0
for (var c = 1; c <= 100;c++){
    var valor = parseInt(lines.shift())
    if (valor > maior){
        maior = valor
        pos = c

    }
}
console.log(`${maior}`)
console.log(`${pos}`)