var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let n = parseInt(lines.shift())

let resposta = 0.0;
if (n === 0) {
  resposta = 3.0;
} else {
  resposta = 6.0;
  for (let i = 0; i < n - 1; ++i) {
    resposta = 6.0 + 1.0 / resposta;
  }
  resposta = 3.0 + 1.0 / resposta;
}

console.log(resposta.toFixed(10));