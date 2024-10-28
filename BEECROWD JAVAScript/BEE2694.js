var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let n = parseInt(lines.shift())

for (let i = 0; i < n; i++) {
    let caracteres= lines.shift()

    let v1 = parseInt(caracteres.substring(2,4))
    let v2 = parseInt(caracteres.substring(5, 8));
    let v3 = parseInt(caracteres.substring(11, 13));

    console.log(v1 + v2 + v3)
    
}