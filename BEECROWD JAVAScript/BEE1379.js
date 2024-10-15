var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

lines.pop();

while(lines.length){
    let [a, b] = lines.shift().trim().split(' ').map((x) => parseInt(x));

    console.log(2 * a - b);
}

