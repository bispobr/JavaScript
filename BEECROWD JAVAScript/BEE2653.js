var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let joias = new Set();

let p = 0;
while (p < lines.length) {
  let joia = lines[p++].trim();
  joias.add(joia);
}

console.log(joias.size);