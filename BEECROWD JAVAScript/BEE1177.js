var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = []
let valor = parseInt(lines.shift())

for (let c = 0; c <=999;c++){

    for (let d = 0;d < valor;d++){
        n.push(d)
    }
    console.log(`N[${c}] = ${n[c]}`)
}