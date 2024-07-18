var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let casos = parseInt(lines.shift())

for (let i = 0; i < casos; i++) {
    let [r1,r2] = lines.shift().trim().split(" ").map((x) => parseInt(x))
    console.log(`${r1 + r2 }`)
    
}