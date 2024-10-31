var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let especiais = ["A", "E", "I", "O", "S", "a", "e", "i", "o", "s"];

let n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
  let senha = lines.shift().trim();
  let total = 1;

  for (let i = 0; i < senha.length; i++) {
     if (especiais.some((str) => str.includes(senha[i]))) {
        total *= 3;
     } else{
        total *= 2;
     }
  }

  console.log(total)
}
