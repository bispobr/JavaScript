var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var positivo = 0
for (var c = 1 ;c <= 6 ;c++){
    var valor = parseFloat(lines.shift())
    if(valor > 0)[
        positivo = positivo + 1
    ]
}

console.log(`${positivo} valores positivos`)