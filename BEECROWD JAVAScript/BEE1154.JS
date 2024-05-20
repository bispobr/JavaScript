var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [soma, contador] = [0, 0];
while (lines.length) {
    var idade = parseInt(lines.shift().trim());

    if (idade < 0) {
        break;
    }

    soma += idade;
    ++contador;
}

console.log(`${(soma / contador).toFixed(2)}`);