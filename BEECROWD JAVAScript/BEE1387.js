var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

while (true) {
    let [l,r]=lines.shift().trim().split(" ").map((x)=>parseInt(x));

    if (l===0 & r===0){
        break;
    }

    console.log(l+r)
}