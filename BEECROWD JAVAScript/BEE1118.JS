var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var soma = 0;
var cont = 0;
var op = 0;
while(true){
    var nota = parseFloat(lines.shift())

    if (nota >= 0.0 && nota <= 10.0){
         soma += nota
         cont += 1
    } else {
        console.log(`nota invalida`)
    }

    if (cont == 2){
        console.log(`media = ${(soma / 2).toFixed(2)}`)
        soma = 0
        cont = 0
        console.log(`novo calculo (1-sim 2-nao)`)
        op = parseInt(lines.shift())
         if (op == 1){
            continue;
         }

         while(op != 2){
            console.log(`novo calculo (1-sim 2-nao)`)
            op = parseInt(lines.shift())

            if (op == 1){
                break;
            }
         }

         if (op == 1){
            continue;
         } else if (op == 2){
            break;
         }

    }
}