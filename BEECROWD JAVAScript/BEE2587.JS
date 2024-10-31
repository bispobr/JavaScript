var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

function encontrarTodasAsPosicoes(string, caractere) {
  const posicoes = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === caractere) {
      posicoes.push(i);
    }
  }
  return posicoes;
}

let n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
  let palavra1 = lines.shift().trim();
  let palavra2 = lines.shift().trim();
  let palavra3 = lines.shift().trim();

  const posicoes = encontrarTodasAsPosicoes(palavra3, "_");
  console.log(palavra1[posicoes[1]] == palavra2 [posicoes[0]]  || palavra1[posicoes[0]] == palavra2[posicoes[1]]? "Y" : "N");
}