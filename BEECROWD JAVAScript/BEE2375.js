var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let n = parseInt(lines.shift());
let[b,c,d] = lines.shift().trim().split(" ").map((x) => parseInt(x))
   
console.log(n  <= b && n <= c & n <= d?"S":"N")