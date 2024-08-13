var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let casos = parseInt(lines.shift());

for (let i = 0; i < casos; i++) {
  let [j1,e1,j2,e2] = lines.shift().trim().split(" ")
  let [n,m] = lines.shift().trim().split(" ")

  resultado = (parseInt(n)+parseInt(m)) % 2 == 0? "PAR":"IMPAR"

  if (e1 == resultado) {
        console.log(`${j1}`)
  } else {
        console.log(`${j2}`);
  }
}
