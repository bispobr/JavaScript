var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let t = parseInt(lines.shift())

for (let i = 0; i < t; i++) {
    let bonus = parseInt(lines.shift())
    let [atq1,def1,level1] = lines.shift().trim().split(" ").map((x) => parseInt(x))
    valorGolpe1 = (atq1 + def1) / 2

    let [atq2, def2, level2] = lines.shift().trim().split(" ").map((x) => parseInt(x));
    valorGolpe2 = (atq2 + def2) / 2;

    if (level1 % 2 == 0) {
        valorGolpe1 += bonus
    }

    if (level2 % 2 == 0) {
      valorGolpe2 += bonus;
    }

    if (valorGolpe1 > valorGolpe2) {
        console.log("Dabriel");
    } else if (valorGolpe2 > valorGolpe1) {
        console.log("Guarte");
    } else{
        console.log("Empate");
    }
}