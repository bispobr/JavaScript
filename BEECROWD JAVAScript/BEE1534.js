var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");


while (lines.length) {
    let n = parseInt(lines.shift())

    let m = []

    for (let linha = 0; linha < n; linha++) {
         m[linha] = [];
        for (let coluna = 0; coluna < n; coluna++) {

            if (linha + coluna == n -1) {
                m[linha][coluna] = 2
            } else if (linha == coluna) {
                m[linha][coluna] = 1
            }else{
                m[linha][coluna] = 3
            }            
        }
    }

    for (let linha = 0; linha < n; linha++) {
      for (let coluna = 0; coluna < n; coluna++) {
            process.stdout.write(`${m[linha][coluna]}`);             
      }
      console.log()
    }

}