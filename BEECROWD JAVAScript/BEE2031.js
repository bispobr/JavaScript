var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let casos= parseInt(lines.shift())

for (let i = 0; i < casos; i++) {
   let A = lines.shift()
   let B = lines.shift()
    
   if (A == "ataque" && B == "ataque") {
     console.log("Aniquilacao mutua")
   } else if (A == "pedra" && B == "pedra") {
     console.log("Sem ganhador")
   } else if (A == "papel" && B == "papel") {
     console.log("Ambos venceram")
   } else if (A == "ataque") {
     console.log("Jogador 1 venceu");
   } else if (B == "ataque") {
     console.log("Jogador 2 venceu")
   } else if (A == "pedra") {
     console.log("Jogador 1 venceu")
   } else if (B == "pedra") {
     console.log("Jogador 2 venceu")
   } 
}