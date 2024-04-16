var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift())
var rato = 0
var sapo = 0
var coelho = 0
for (var c = 0;c < n;c++){
    var [quantia, tipo] = lines.shift().trim().split(" ")
    quantia = parseInt(quantia)

    if (tipo == "R"){
        rato += quantia
    } else if (tipo== "S"){
        sapo += quantia
    } else if (tipo == "C"){
        coelho += quantia
    }
}

total = rato + coelho + sapo

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelho}`);
console.log(`Total de ratos: ${rato}`);
console.log(`Total de sapos: ${sapo}`);
console.log(`Percentual de coelhos: ${(coelho * 100 / total).toFixed(2)} %`);
console.log(`Percentual de ratos: ${(rato * 100 / total).toFixed(2)} %`);
console.log(`Percentual de sapos: ${(sapo * 100 / total).toFixed(2)} %`);

