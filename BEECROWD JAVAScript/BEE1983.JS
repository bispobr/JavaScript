var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let casos = parseInt(lines.shift());
let nota = 0
let maior = 0

for (let i = 0; i < casos; i++) {
  let [matricula,nota] = lines.shift().trim().split(" ").map((x) => parseFloat(x));

  if (i == 0) {
    maior = nota
    aluno = matricula
  } else if (nota > maior) {
    maior = nota;
    aluno = matricula;
  } 
}

if (maior >=8){
    console.log(`${aluno}`)
} else{
    console.log("Minimum note not reached");
}