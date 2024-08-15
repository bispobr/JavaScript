var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

while (lines.length) {
    let casos = parseInt(lines.shift())

    for (let i = 0; i < casos; i++) {
        let mesa = parseInt(lines.shift())

        if (mesa == 0) {
            break;
        }
        
        if (mesa % 2 == 0) {
            console.log((mesa * 2) - 2)
        } else{
            console.log((mesa* 2) -1)
        }
        
    }
}
