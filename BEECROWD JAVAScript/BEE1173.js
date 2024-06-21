var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = []

n[0] = parseInt(lines.shift())

for (let c = 0;c <=8;c++){
    n[c+1] = n[c] * 2
}

for (let d = 0;d <=9;d++){
    console.log(`N[${d}] = ${n[d]}`)
}