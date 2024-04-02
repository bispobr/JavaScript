var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
while(true){
    var n = parseInt(lines.shift())
    if(n===0){
        break;
    }
    var jogadas = lines.shift().trim().split(" ").map((x) => parseInt(x))
    var maria = 0
    var joao = 0
    for (var c = 0;c<n;c++){
        if (jogadas[c]==0){
            maria+=1
        } else if (jogadas[c]==1){
            joao+=1

        }
    }
    console.log(`Mary won ${maria} times and John won ${joao} times`)
}