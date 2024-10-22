var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let n = parseInt(lines.shift())
let valores = lines.shift().trim().split(" ").map((x) => parseInt(x))
console.log( valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) - n)