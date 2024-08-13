var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let n = parseInt(lines.shift());
let valores = lines
  .shift()
  .trim()
  .split(" ")
  .map((x) => parseInt(x));

for (let i = 2; i < 6; i++) {
  let multiplo = 0;
  for (let j = 0; j < n; j++) {
    if (valores[j] % i == 0) {
      multiplo += 1;
    }
  }
  console.log(`${multiplo} Multiplo(s) de ${i}`);
}
