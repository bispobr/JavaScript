var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var cont = 0 
for (var c = 0 ; c <= 4 ; c++){
    var valor = lines.shift();
    if (valor %2 == 0 ){
        cont = cont + 1;
    }

}
console.log(`${cont} valores pares`)