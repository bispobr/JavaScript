const { stdout } = require("process");

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valor = parseInt(lines.shift());

process.stdout.write("Feliz nat");
for (let i = 0; i <valor; i++) {
    process.stdout.write("a");    
}
process.stdout.write("l!");
console.log()
