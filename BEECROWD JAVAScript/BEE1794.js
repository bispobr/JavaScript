var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let n = parseInt(lines.shift())
let [la,lb] = lines.shift().trim().split(" ").map((x)=> parseInt(x))
let [sa,sb] = lines.shift().trim().split(" ").map((x)=> parseInt(x))

console.log( (n >= la & n <= lb) & (n >= sa & n <= sb)?"possivel":"impossivel")