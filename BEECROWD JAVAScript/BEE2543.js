var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

while (lines.length){
 
var res = 0
     
let [gameplays, id] = lines.shift().trim().split(" ").map((x) => parseInt(x))

for (let i = 0; i < gameplays; i++) {

    let [identificador, jogo] = lines.shift().trim().split(" ").map((x) => parseInt(x));

      if (identificador == id && jogo == 0) {
        res +=1
      }
    
}

console.log(res)
}
