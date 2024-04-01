var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
while(true){
    var n = parseInt(lines.shift())
    if (n==0){
        break;
    }
    var amostra = lines.shift().trim().split(" ").map((x) => parseInt(x));
    var pico = 0
    for (var c = 0;c<=n;c++){
        var proximo = amostra[(c + 1) % n]
        var anterior = amostra[(c - 1 + n) % n]
        
        if ((amostra[c] < proximo & amostra[c] < anterior) || (amostra[c] > proximo & amostra[c] > anterior)){
            pico+=1
        }
        
    }
    console.log(pico)
   
}
