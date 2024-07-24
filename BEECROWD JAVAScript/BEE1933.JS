var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [a, b] = lines.shift().trim().split(" ").map((x) => parseInt(x));

console.log(`${a > b?a:b}`);
