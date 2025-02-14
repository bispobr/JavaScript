var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let n = parseInt(lines.shift())

let par = []
let impar = []

for (let i = 0; i < n; i++) {
    let valor = parseInt(lines.shift())

    if (valor % 2 == 0) {
        par.push(valor)
    } else {
        impar.push(valor)
    }
    
}

par.sort((a, b) => a - b);
impar.sort((a, b) => b - a);

for (let j = 0; j< par.length; j++) {
  console.log(par[j])
    }

for (let j = 0; j < impar.length; j++) {
  console.log(impar[j]);
}