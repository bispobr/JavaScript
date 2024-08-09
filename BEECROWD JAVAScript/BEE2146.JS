var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

while (lines.length) {
  let N = parseInt(lines.shift());
  console.log(N - 1);
}