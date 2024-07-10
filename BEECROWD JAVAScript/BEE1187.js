var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let soma = 0
let cont = 0

let m = []

let o =  lines.shift()

for (let linha = 0; linha < 12; linha++) {
        m[linha] = []
    for (let coluna = 0; coluna < 12; coluna++) {
        m[linha][coluna] = parseFloat(lines.shift())
        if ((coluna > linha) & (coluna + linha < 12-1)) {
            soma += m[linha][coluna]
            cont +=1
            
        }
    }
    
}

if (o =="S") {
    console.log(`${soma.toFixed(1)}`)
} else {
    console.log(`${(soma/cont).toFixed(1)}`)
}

