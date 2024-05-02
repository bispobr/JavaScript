var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

n = parseInt(lines.shift())

for (var c = 1 ;c <= n;c++){
    console.log(`${c} ${c*c} ${c*c*c}`)
    console.log(`${c} ${c*c + 1} ${c*c*c + 1}`)
}