var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = []

for (let c = 0; c <10;c++){
    let valor = parseInt(lines.shift())

    if (valor <= 0){
        x[c] = 1
    }else{
        x[c] = valor
    }
}

for (let e = 0 ; e <10;e++){
    console.log(`X[${e}] = ${x[e]}`)
}