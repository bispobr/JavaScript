var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift())
for (var c = 1;c <=10000;c++){
    if (c % valor == 2){
        console.log(c)
    }
}