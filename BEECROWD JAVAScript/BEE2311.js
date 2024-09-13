var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let casos = parseInt(lines.shift());

for (let i = 0; i < casos; i++) {

  let nome = lines.shift().trim();
  let grau = parseFloat(lines.shift())
  let valores = lines.shift().trim().split(" ").map((x) => parseFloat(x));

  let soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
  let resultado = (soma - Math.max.apply(null, valores) - Math.min.apply(null, valores)) * grau
 

  console.log(`${nome} ${(resultado).toFixed(2)}`);

  
}

