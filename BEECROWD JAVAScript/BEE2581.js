var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let casos = parseInt(lines.shift())

for (let i = 0; i < casos; i++) {
    let pergunta = lines.shift()
    console.log("I am Toorg!"); 
}