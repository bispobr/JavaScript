var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())
for (var c = 1;c <=10;c++){
    console.log(`${c} x ${valor} = ${c * valor}`)
}