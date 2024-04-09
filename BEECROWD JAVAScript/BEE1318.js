const { count } = require('console');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
while(true){
    var rr = 0
    var bilhetes = lines.shift().trim().split(" ").map((x) => parseInt(x))
    if(bilhetes[0]== 0 && bilhetes[1] == 0 ){
        break;
    }
    var nbilhetes = lines.shift().trim().split(" ").map((x) => parseInt(x))
    
    for (var c = 0; c<bilhetes[1];c++){
        var r = 0
        for (var d = 0; d<bilhetes[1];d++){
            if (c == nbilhetes[d]){
                r +=1;
            }
        }
        if (r > 1){
            rr +=1
        }
    }
    console.log(rr)
}
