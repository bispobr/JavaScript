var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = []

for (let c = 0; c<20;c++){
    n.push(lines.shift())
}

n.reverse()

for (let d = 0;d <n.length;d++){
    console.log(`N[${d}] = ${n[d]}`)
}