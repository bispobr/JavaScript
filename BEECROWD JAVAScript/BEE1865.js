var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let casos = parseInt(lines.shift())

for (let i = 0; i < casos; i++) {
    let [nome, forca] = lines.shift().trim().split(" ")

    if (nome =="Thor") {
        console.log("Y")
    } else {
        console.log("N")
    }
    
}