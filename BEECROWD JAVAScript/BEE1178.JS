var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = []
n[0] = parseFloat(lines.shift())

for (let c = 0;c <99;c++){
    n[c+1] = n[c] / 2
    console.log(`N[${c}] = ${n[c].toFixed(4)}`)
}
console.log(`N[99] = ${n[99].toFixed(4)}`)