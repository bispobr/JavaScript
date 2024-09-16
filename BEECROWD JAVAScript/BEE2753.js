var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

for (let letra = 97; letra < 123; ++letra) {
  console.log(`${letra} e ${String.fromCharCode(letra)}`);
}
