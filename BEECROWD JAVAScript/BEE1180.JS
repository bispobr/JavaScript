var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let n = parseInt(lines.shift())
let valores = lines.shift().trim().split(" ").map((x) => parseInt(x))
let menorValor


for (let c = 0;c <n;c++){

    if (c == 0){
        menorValor = valores[0]
        pos = 0
    }
    if (valores[c] <  menorValor){
        menorValor = valores[c]
        pos = c;
    }

}

console.log(`Menor valor: ${menorValor}`)
console.log(`Posicao: ${pos}`)