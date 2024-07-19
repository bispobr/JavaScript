var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

while (lines.length) {
  let n = parseInt(lines.shift());

  if (n == 0) {
    break;
  }

  let m = [];

  for (let linha = 0; linha < n; linha++) {
    m[linha] = [];
    for (let coluna = 0; coluna < n; coluna++) {
        
        if (linha == Math.floor(n/ 2) && coluna === Math.floor(n / 2)) {
          m[linha][coluna] = 4
        } else if ( Math.floor(n / 3) <= linha &&
          linha < n - Math.floor(n / 3) && Math.floor(n / 3) <= coluna && coluna < n - Math.floor(n / 3)
        ) {
          m[linha][coluna] = 1
        } else if (linha === coluna) {
          m[linha][coluna] = 2
        } else if (linha === n - 1 - coluna) {
          m[linha][coluna] = 3
        } else {
          m[linha][coluna] = 0;
        }
    }
  }

  for (let linha = 0; linha < n; linha++) {
    for (let coluna = 0; coluna < n; coluna++) {
      process.stdout.write(`${m[linha][coluna]}`);
    }
    console.log();
  }
  console.log();
}
