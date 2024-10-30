var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
  let sobrenome = lines.shift().trim();

  let dificil = false

  let tam = sobrenome.length - 2

  let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let i = 0; i < tam; i++) {
    if (!vogais.some(str => str.includes(sobrenome[i]))) {
        
        if (!vogais.some((str) => str.includes(sobrenome[i + 1]))) {
            
            if (!vogais.some((str) => str.includes(sobrenome[i + 2]))) {
                
                 dificil = true;
            }
        } 
    }
    
  }

  console.log(
    dificil ? `${sobrenome} nao eh facil` : `${sobrenome} eh facil`
  );
  

}
