var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (lines.length) {
    let valores = lines.shift().trim().split(' ').map((x) => parseInt(x))
    
    if (valores[0] == 0) {
        break;
    }
    console.log((Math.floor(Math.sqrt(valores[0] * valores[1] * 100.0 / valores[2]))).toFixed(0));
}

