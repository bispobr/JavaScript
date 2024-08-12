var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let resposta = 0
let n = parseInt(lines.shift())
let r = lines.shift().trim().split(" ").map((x) => parseInt(x));

for (let i = 1; i < n; i++) {
    if (r[i] < r[i - 1]) {
        resposta = i + 1
        break;
    }   
}
console.log(resposta)