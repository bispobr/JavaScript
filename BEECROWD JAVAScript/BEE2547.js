var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

while (lines.length) {
  let [N, Amin, Amax] = lines.shift().trim().split(" ").map((x) => parseInt(x));

  let res = 0;
  for (let i = 0; i < N; ++i) {
    let altura = parseInt(lines.shift());

    if (altura >= Amin && altura <= Amax) {
      ++res;
    }
  }

  console.log(res);
}