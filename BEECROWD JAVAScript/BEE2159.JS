var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");


let n = parseInt(lines.shift());
console.log(`${(n / Math.log(n)).toFixed(1)} ${((1.25506 * n) / Math.log(n)).toFixed(1)}`);