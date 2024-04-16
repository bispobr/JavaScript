var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var qtd_Casos = parseInt(lines.shift())
for (var c = 0;c < qtd_Casos;c++){
    casos_de_teste = lines.shift().trim().split(" ").map((x) => parseFloat(x))
    var media =  ((casos_de_teste[0] * 2) + (casos_de_teste[1] * 3) + (casos_de_teste[2] * 5)) / 10
    console.log(`${media.toFixed(1)}`)
}