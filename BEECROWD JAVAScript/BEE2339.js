var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");


let [c,p,f] = lines.shift().trim().split(" ").map((x) => parseInt(x))
console.log(c *f<=p?"S":"N")