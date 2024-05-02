var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [alcool,gasolina,diesel] = [0,0,0]

while (true){
    valor = parseInt(lines.shift())

    if (valor == 4){
        break;
    }

    switch (valor){
        case 1:
            alcool += 1;
            break;
        case 2:
            gasolina +=1;
            break;
        case 3:
            diesel +=1;
            break;

    }
}

console.log(`MUITO OBRIGADO`)
console.log(`Alcool: ${alcool}`)
console.log(`Gasolina: ${gasolina}`)
console.log(`Diesel: ${diesel}`)