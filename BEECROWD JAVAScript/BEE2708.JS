var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let totVisitantes = 0;
let  jipes = 0;

while(true){
    entrada = lines.shift().trim().split(" ")

    if (entrada[0] == "ABEND") {
        break;
    }
                      
    if (entrada[0] == "SALIDA") {
      totVisitantes += parseInt(entrada[1])
      jipes += 1;
    } else if (entrada[0] == "VUELTA") {
      totVisitantes -= parseInt(entrada[1])
      jipes -= 1;
    }
}
       
console.log(totVisitantes);
console.log(jipes);
