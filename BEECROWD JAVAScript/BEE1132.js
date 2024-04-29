var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift())
var y = parseInt(lines.shift())

var soma = 0;

if (x> y){
    [x,y] = [y,x]
}



for (var c = x; c <= y ;c++){
    if (c % 13 != 0)[
        soma += c
    ]
}

console.log(soma)