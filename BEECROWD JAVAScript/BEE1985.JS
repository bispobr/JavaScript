var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let preco = [1.50,2.50,3.50,4.50,5.50]
let soma = 0

let casos = parseInt(lines.shift())

for (let i = 0; i < casos; i++) {
let [produto, qtd, c] = lines.shift().trim().split(" ").map((x) => parseInt(x));

soma += preco[produto - 1001] * qtd
}

console.log(`${soma.toFixed(2)}`)