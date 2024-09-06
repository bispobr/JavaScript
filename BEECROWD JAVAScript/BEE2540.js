var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

while (lines.length) {
    let njogadores = parseInt(lines.shift())
    let impeachment = (njogadores / 3 ) * 2
    let votosJogadores = lines.shift().trim().split(" ").map(x=> parseInt(x))

    let somaVotos = votosJogadores.map(valor => valor).reduce((acc, val) => acc + val, 0);

    console.log(somaVotos >= impeachment?"impeachment":"acusacao arquivada")
}