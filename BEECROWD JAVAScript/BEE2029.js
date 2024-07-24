var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");


while (lines.length) {
    
    let v = parseFloat(lines.shift())
    let d = parseFloat(lines.shift())

    d /= 2;

    let area = 3.14 * d * d;
    let altura = v / area;

    console.log(`ALTURA = ${altura.toFixed(2)}`);
    console.log(`AREA = ${area.toFixed(2)}`);
}