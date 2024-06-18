var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var casos = parseInt(lines.shift())

for (var c = 1; c <= casos ;c++){
    var valor = parseInt(lines.shift())
    var cont = 0
    for (var d = 1; d <=valor;d++){
        if (valor % d == 0){
            cont += 1
        }
    }

    console.log(cont == 2? `${valor} eh primo`:`${valor} nao eh primo`)
}