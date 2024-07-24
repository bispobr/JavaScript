var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [a,b,c,d] = lines.shift().trim().split(" ").map(x => parseInt(x))

if ((Math.abs(a - b)  <  c && c < a + b) || (Math.abs(a - b) < d && d < a + b) || (Math.abs(a - c) < d && d < a + c) || (Math.abs(b - c) < d && d < b + c)) {
           console.log("S");
 } else {
            console.log("N");
}