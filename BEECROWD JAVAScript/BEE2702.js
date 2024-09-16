var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let refeicao = lines.shift().trim().split(" ").map((x) => parseInt(x))
let pedido = lines.shift().trim().split(" ").map((x) => parseInt(x))
let res = 0

for (let i = 0; i < pedido.length; i++) {
    if (pedido[i] > refeicao[i]) {
        res += pedido[i] - refeicao[i]
    }
}

console.log(res)