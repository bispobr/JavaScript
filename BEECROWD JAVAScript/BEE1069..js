var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");


let n = parseInt(lines.shift());

for (let k = 0; k < n; ++k) {
  let expressao = lines.shift();

  let resposta = 0;
  let pilha = []
  for (let i = 0; i < expressao.length; ++i) {
    if (expressao[i] === "<") {
      pilha.push("<");
    } else if (expressao[i] === ">" && pilha.length> 0) {
      resposta += 1;
      pilha.pop();
    }
  }

  console.log(resposta);
}