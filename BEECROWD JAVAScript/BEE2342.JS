var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let total= parseInt(lines.shift())
let [v1,sinal,v2] = lines.shift().trim().split(" ")

if (sinal === "+") {
    console.log(parseInt(v1) + parseInt(v2) <= total ? "OK" : "OVERFLOW");
} else if (sinal === "*") {
    console.log(parseInt(v1) * parseInt(v2) <= total ? "OK" : "OVERFLOW");
}
