var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

//corrigir
while (lines.length) {
    let expressao = lines.shift()

    let  correto = true

    
    let parenteses = []

    for ( i = 0; i < expressao.length; i++) {
        if (expressao[i] === "("){
            parenteses.push("(");
        } else if (expressao[i] === ")"){
            if (parenteses.length == 0) {
                correto = false
                break;
            } else{
                parenteses.pop()
            }
        }

        
    }
    correto = correto & parenteses.length==0;
    console.log(correto ? "correct" : "incorrect");
}