var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let C = parseInt(lines.shift());
for (let i = 0; i < C; ++i) {
  let frase = lines.shift().trim();
  console.log((0.08 + 0.01 * (frase.length - 8)).toFixed(2));
}
