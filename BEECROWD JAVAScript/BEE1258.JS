var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

lines.pop();

class Camiseta {
  constructor(n, c, t) {
    this.nome = n;
    this.cor = c;
    this.tamanho = t;
  }
}

const comp = (a, b) => {
  if (a.cor === b.cor) {
    if (a.tamanho === b.tamanho) {
      if (a.nome < b.nome) return -1;
      if (a.nome > b.nome) return 1;
      return 0;
    }
    if (a.tamanho > b.tamanho) return -1;
    return 1;
  }
  if (a.cor < b.cor) return -1;
  return 1;
};

let first = true;
while (lines.length) {
  let N = parseInt(lines.shift());

  if (first) first = false;
  else console.log("");

  let camisetas = [];
  for (let i = 0; i < N; ++i) {
    let nome = lines.shift().trim();
    let [cor, tamanho] = lines.shift().trim().split(" ");

    camisetas.push(new Camiseta(nome, cor, tamanho));
  }

  camisetas.sort(comp);

  for (let i = 0; i < N; ++i) {
    console.log(
      `${camisetas[i].cor} ${camisetas[i].tamanho} ${camisetas[i].nome}`
    );
  }
}
