var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let n = parseInt(lines.shift());
let soma = 0

for (let i = 0; i < n; i++) {
    let[l,c] = lines.shift().trim().split(" ").map((x) => parseInt(x))
    if (l > c) {
        soma += c
    }
}
console.log(soma)