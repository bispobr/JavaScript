var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
 
let minutos = parseInt(lines.shift())
let valores = lines.shift().trim().split(" ").map(x => parseInt(x))

const soma = valores.reduce((acumulador, valorAtual) => {return acumulador + valorAtual;}, 0);

console.log(soma <= minutos ? "Farei hoje!" : "Deixa para amanha!")