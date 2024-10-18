var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let posicao= [1,3,5,10,25,50,100]

let n = parseInt(lines.shift())

for (let i = 0; i < posicao.length; i++) {
    if (n <= posicao[i]) {
        console.log(`Top ${posicao[i]}`);
        break;
    }   
}