var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var casos = parseInt(lines.shift())

for(var c = 1;c <=casos;c++){
    var valor = parseInt(lines.shift())
    var soma = 0
    for (var d = 1;d < valor;d++){
        if (valor % d == 0){
            soma+=d
        }
    }   
    console.log(valor == soma? `${valor} eh perfeito`:`${valor} nao eh perfeito`)
}