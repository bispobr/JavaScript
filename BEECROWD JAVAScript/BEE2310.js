var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [stotal,btotal,atotal,s1total,b1total,a1total] = [0,0,0,0,0,0]


let casos = parseInt(lines.shift());

for (let i = 0; i < casos; i++) {

  let nome = lines.shift();
  let [s,b,a] = lines.shift().trim().split(" ").map((x) => parseInt(x))
  stotal +=s
  btotal +=b
  atotal +=a
   
  let  [s1,b1,a1] = lines.shift().trim().split(" ").map((x) => parseInt(x))
  s1total += s1;
  b1total += b1;
  a1total += a1;
  
}

console.log(`Pontos de Saque: ${(100 * s1total / stotal).toFixed(2)} %.`);
console.log(`Pontos de Bloqueio: ${(100 * b1total / btotal).toFixed(2)} %.`);
console.log(`Pontos de Ataque: ${(100 * a1total / atotal).toFixed(2)} %.`);
