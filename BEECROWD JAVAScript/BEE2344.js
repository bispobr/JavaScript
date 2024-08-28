var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valor = parseInt(lines.shift())

if (valor >= 86) {
  console.log("A");
} else if (valor >= 61) {
  console.log("B");
} else if (valor >= 36) {
  console.log("C");
} else if (valor >= 1) {
  console.log("D");
} else{
    console.log("E")
}
