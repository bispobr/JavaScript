var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let teste = 1;
while (true) {
  let n = parseInt(lines.shift());

  if (n === 0) {
    break;
  }

  console.log(`Teste ${teste}`);
  teste += 1;

  let valores= lines.shift().trim().split(" ").map((x)=> parseInt(x))

  for (let i = 0; i < n; i++) {
    if (valores[i] === i + 1) {
        console.log(valores[i])
        console.log()
        break;
    } 
  } 
}
