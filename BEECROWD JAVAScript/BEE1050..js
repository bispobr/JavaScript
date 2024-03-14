var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');

var salario = parseFloat(lines.shift())
var imposto = 0;

if ( salario >= 0.00 & salario <= 2000.00){
    console.log(`Isento`)
} else if (salario >= 2000.01 & salario <= 3000.00){
    imposto = (salario - 2000) * 0.08
    console.log(`R$ ${imposto.toFixed(2)}`)
}else if (salario >=3000.01 & salario <= 4500.00){
    imposto = (salario - 3000) * 0.18 + 1000 * 0.08
    console.log(`R$ ${imposto.toFixed(2)}`)
} else if(salario >=4500.00){
    imposto = (salario - 4500) * 0.28 + (1500 * 0.18) + (1000 * 0.08)
    console.log(`R$ ${imposto.toFixed(2)}`)
}

