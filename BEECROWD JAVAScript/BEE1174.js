var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let a = []

for (let c = 0;c<100;c++){
    a[c] = parseFloat(lines.shift())

    if (a[c] <=10) {
        console.log(`A[${c}] = ${a[c].toFixed(1)}`)

    }
}