var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

while (lines.length) {

    let [m,n] = lines.shift().trim().split(" ").map((x)=> parseInt(x))

    if (m && n == 0) {
        break;
    }

    let soma = (m + n).toString()

    console.log(soma.split('0').join(''))
}