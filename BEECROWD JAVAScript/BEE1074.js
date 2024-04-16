var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var qtd_Valores_lidos = parseInt(lines.shift())
for (var c = 0; c < qtd_Valores_lidos;c++){
    var valor = parseInt(lines.shift())
    if (valor == 0){
        console.log("NULL")
    } else{
        if (valor % 2 == 0) {
            if (valor > 0){
                console.log("EVEN POSITIVE")
            } else {
                console.log("EVEN NEGATIVE")
            }
        } else if (valor % 2 !=0){
            if (valor > 0){
                console.log("ODD POSITIVE")
            } else {
                console.log("ODD NEGATIVE")
            }
        }
    }
}