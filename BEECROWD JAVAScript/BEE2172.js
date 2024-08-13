var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

while (lines.length) {
    
    let [x, m] = lines
      .shift()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));

    if (x == 0 && m == 0) {
        break
    }

    console.log(x * m)
}