var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");


let [h, p] = lines
  .shift()
  .trim()
  .split(" ")
  .map((x) => parseInt(x));

  console.log((h/p).toFixed(2))