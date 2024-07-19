var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

while (true) {
  let n = parseInt(lines.shift());

  if (n == 0) {
    break;
  }

  let m = [];

  for (let linha = 0; linha < n; linha++) {
    m[linha] = [];
    for (let coluna = 0; coluna < n; coluna++) {
      m[linha][coluna] = Math.abs(linha - coluna) + 1;
    }
  }

  for (let linha = 0; linha < n; linha++) {
    for (let coluna = 0; coluna < n; coluna++) {
      process.stdout.write(`${m[linha][coluna]}`.toString().padStart(4));
    }
    console.log();
  }
  console.log();
}
