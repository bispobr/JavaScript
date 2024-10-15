var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

while (true) {
    let [a,b,c] = lines.shift().trim().split(" ").map((x) => parseInt(x));

    if (a===0 & b ===0 & c===0){
        break;
    }

    console.log(Math.floor((a * b * c) ** (1.0 / 3.0)));
}