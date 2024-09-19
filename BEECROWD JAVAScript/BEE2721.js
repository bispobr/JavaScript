var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

renas = ["Rudolph","Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen" ]
bolasNeves = lines.shift().trim().split(" ").map((x) => parseInt(x))
let soma = bolasNeves.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)

console.log(renas[soma % 9])

