var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let n = parseInt(lines.shift())

for (let i = 0; i < n; i++) {
    let k = parseInt(lines.shift());

    for (let j = 0; j < k; j++) {
        let op = parseInt(lines.shift());

        switch (op) {
          case 1:
            console.log("Rolien");
            break;
          case 2:
            console.log("Naej");
            break;
          case 3:
            console.log("Elehcim");
            break;
          case 4:
            console.log("Odranoel");
            break;
        }
        
    }
    
}