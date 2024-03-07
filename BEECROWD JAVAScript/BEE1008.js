var num = parseInt(lines.shift())
var horas = parseInt(lines.shift())
var valor = parseFloat(lines.shift())
salario = horas * valor
console.log(`NUMBER = ${num}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)