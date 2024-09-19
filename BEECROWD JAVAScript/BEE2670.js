var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());

let minimo = Math.min(a * 4 + b*2, a * 2 + c * 2, b * 2 + c * 4);
console.log(minimo); 
