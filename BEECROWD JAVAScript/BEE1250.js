var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var n = parseInt(lines.shift())
for (var c = 0; c < n ; c++){
    t= parseInt(lines.shift())
    tiros = lines.shift().trim().split(" ").map((x) => parseInt(x))
    pulos = lines.shift()
    var atingido = 0
    for (var d = 0; d < t;d++ ){
        if ((pulos[d] == "S" && tiros[d] < 3) || (pulos[d] == "J" && tiros[d] > 2)){
            atingido+=1
        }       
    }  
    console.log(atingido)
}
    
