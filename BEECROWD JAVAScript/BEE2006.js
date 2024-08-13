var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let cont = 0

let t = parseInt(lines.shift())
let valores = lines.shift().trim().split(" ").map((x) => parseInt(x))

for (let i = 0; i < valores.length; i++) {
    if (valores[i] == t) {
        cont +=1
    }
    
}

console.log(`${cont}`)