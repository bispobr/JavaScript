var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let texto = lines.shift()

if (texto.length <= 140) {
    console.log("TWEET");
} else {
    console.log("MUTE");
}
