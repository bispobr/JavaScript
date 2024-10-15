var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let tomada1 = lines.shift().trim().split(" ").map((x) => parseInt(x));
let tomada2 = lines.shift().trim().split(" ").map((x) => parseInt(x));
let funciona= true;

for (let i = 0; i < tomada1.length; i++) {
    if(tomada1[i]===tomada2[i]){
        funciona = false;
        break;
    }
    
}

console.log(funciona?"Y":"N")