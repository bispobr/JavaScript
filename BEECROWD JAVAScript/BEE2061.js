var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [n,m] = lines
  .shift()
  .trim()
  .split(" ")
  .map((x) => parseInt(x));

  for (let i = 0; i <=m; i++) {
    let acao = lines.shift()

    if (acao == "fechou") {
        n+=1
    } else if (acao == "clicou") {
      n -= 1;
    }
    
  }

  console.log(n)