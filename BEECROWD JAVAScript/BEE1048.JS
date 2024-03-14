var salario = parseFloat(lines.shift())

if (salario >= 0 && salario <= 400.00 ){
    percentual = 15
    reajuste = (salario * percentual) / 100
    nsalario = salario + reajuste
} else if(salario >= 400.01 && salario <= 800.00){
    percentual = 12
    reajuste = (salario * percentual) / 100
    nsalario = salario + reajuste
} else if (salario >= 800.01 && salario <= 1200.00){
    percentual = 10
    reajuste = (salario * percentual) / 100
    nsalario = salario + reajuste
} else if (salario >= 1200.01 && salario <= 2000.00){
    percentual = 7
    reajuste = (salario * percentual) / 100
    nsalario = salario + reajuste
} else if (salario > 2000.00){
    percentual = 4
    reajuste = (salario * percentual) / 100
    nsalario = salario + reajuste
}

console.log(`Novo salario: ${nsalario.toFixed(2)}`)
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
console.log(`Em percentual: ${percentual} %`)