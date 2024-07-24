var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let a = parseInt(lines.shift())

console.log(a.toString(16).toUpperCase());
