var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
while (true){
    var n = parseInt(lines.shift())
    if(!n)  break;
    for (var c = 1; c <= n;c++){
        questao = lines.shift().trim().split(" ")
        var cont = 0;
        for (var d = 0; d <= 4 ;d++){
            if (questao[d] <= 127){
                cont = cont + 1
            }
        }
    
        if(cont > 1){
            console.log("*")
        } else {
            if (questao[0] <= 127){
                console.log("A")
            } else if (questao[1] <= 127){
                console.log("B")
            } else if (questao[2] <= 127){
                console.log("C")
            } else if (questao[3] <= 127){
                console.log("D")
            } else if (questao[4] <= 127){
                console.log("E")
            } 
        }
        
    
        
    }
    
}
