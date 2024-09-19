var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

const n = parseInt(lines.shift());
const k = parseInt(lines.shift());

let cont = 0;
let pessoas = [];

for (let i = 0; i < n; i++) {
  pessoas.push(parseInt(lines.shift()));
}

pessoas.sort((a, b) => a - b).reverse();

for (let j = k; j < pessoas.length; j++) {
  if (pessoas[k - 1] == pessoas[j]) {
    cont++;
  }
}
console.log(k + cont);