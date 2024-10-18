var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

while (true) {
    let n = parseInt(lines.shift())

    if(n === 0){
        break;
    }

    let tempoPessoas = lines.shift().trim().split(" ").map((x) => parseInt(x))
    let tempoTotal= 10

    if (n === 1) {
        console.log(tempoTotal)
    } else{
        for (let i = 0; i < n - 1; i++) {
            tempoTotal += Math.min(10,tempoPessoas[i+1]- tempoPessoas[i])   
        }
        console.log(tempoTotal);
    }
}