var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [p, j1,j2,r,a] = lines.shift().trim().split(" ").map((x) => parseInt(x))

if (r == 0) {
    if (a == 0) {
        console.log(`${(j1+j2) % 2 != p?"Jogador 1 ganha!":"Jogador 2 ganha!"}`)
    } else {
        console.log("Jogador 1 ganha!");
    }
} else{
    if (a == 0) {
        console.log("Jogador 1 ganha!");
    } else {
        console.log("Jogador 2 ganha!");
    }
}


