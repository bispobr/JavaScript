var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let n=parseInt(lines.shift())

for (let i = 0; i < n; i++) {
    let[a,b] = lines.shift().trim().split(" ").map((x) => parseInt(x))
    console.log(parseInt(a / 3) * parseInt(b / 3))  
}


