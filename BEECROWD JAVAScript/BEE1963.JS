var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [a, b] = lines.shift().trim().split(" ").map((x) => parseFloat(x));
console.log(`${(100 * b/a - 100).toFixed(2)}%`)
