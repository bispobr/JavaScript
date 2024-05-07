var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (lines.length) {
    var X = parseInt(lines.shift());

    if (X === 0) {
        break;
    }

    var numeros = [];

    for (var i = 1; i <= X; ++i) {
        numeros.push(i);
    }

    console.log(numeros.join(' '));
}