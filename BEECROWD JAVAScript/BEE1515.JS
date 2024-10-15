var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

while (true) {
    let n= parseInt(lines.shift())

    if (n===0){
        break;
    }
    let primeiro;
    let data
    for (let i = 0; i < n; i++) {
        let [planeta, ano, distancia] = lines.shift().trim().split(' ')
        
        if (i===0){
             primeiro = planeta;
             data= parseInt(ano) - parseInt(distancia);
        }

        if (parseInt(ano) - parseInt(distancia) < data) {
          data = parseInt(ano) - parseInt(distancia);
          primeiro = planeta;
        }
        
    }
    console.log(primeiro)
}