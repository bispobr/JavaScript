var valores1 = lines.shift().trim().split(" ")
var valores2 = lines.shift().trim().split(" ")

var codigo1 = parseInt(valores1.shift())
var num1 = parseInt(valores1.shift())
var valor1 = parseFloat(valores1.shift())

var codigo2 = parseInt(valores2.shift())
var num2 = parseInt(valores2.shift())
var valor2 = parseFloat(valores2.shift())

var valor = ((valor1 * num1)+ (valor2 * num2))

console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`)



