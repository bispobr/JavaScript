var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [a, b, c] = lines.shift().trim().split(" ").map((x) => parseInt(x));


if (a == 0){
    h = 24 + (b + c);
}else{
    h = a + (b + c);
}


if (h == 24) {
    console.log("0")
} else if (h >24) {
    console.log(`${h -24}`)
} else{
    console.log(`${h}`);
}
