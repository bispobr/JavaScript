var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let m = []
let soma = 0

let c = parseInt(lines.shift())
let t = lines.shift()

for (let linha = 0;linha <12;linha++){
        m[linha] = []
    for (let coluna = 0;coluna <12;coluna++){
        m[linha] [coluna] = parseFloat(lines.shift())

        if (coluna == c){
            soma += m[linha][coluna]
        }
    }
}

if (t=="S"){
    console.log(`${soma.toFixed(1)}`)
} else{
    console.log(`${(soma/12).toFixed(1)}`)
}