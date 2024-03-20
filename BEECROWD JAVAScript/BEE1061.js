var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor1 = lines.shift().trim().split(" ")
var valor2 = lines.shift().trim().split(" ")
var valor3 = lines.shift().trim().split(" ")
var valor4 = lines.shift().trim().split(" ")

var tempo1 = parseInt(valor2[4]) + parseInt(valor2[2] * 60) + parseInt( valor2[0] * 3600) + parseInt((valor1[1] * 24) * 3600)
var tempo2 = parseInt(valor4[4]) + parseInt(valor4[2] * 60) + parseInt( valor4[0] * 3600) + parseInt((valor3[1] * 24) * 3600)

var tempo = tempo2 - tempo1

var dia = parseInt(tempo /86400)
tempo = tempo % 86400

var hora = parseInt(tempo / 3600)
tempo = tempo % 3600

var minuto = parseInt(tempo / 60)
tempo = tempo % 3600

var segundo = parseInt(tempo % 60)

console.log(`${dia} dia(s)`)
console.log(`${hora} hora(s)`)
console.log(`${minuto} minuto(s)`)
console.log(`${segundo} segundo(s)`)
