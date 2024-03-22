var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift())

for (var c = 1;c<=n;c++){
    if (c % 2 ==0){
        console.log(`${c}^2 = ${Math.pow(c,2)}`)
    }
}