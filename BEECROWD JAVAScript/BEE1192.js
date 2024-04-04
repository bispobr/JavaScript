const { Console } = require('console');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var n = parseInt(lines.shift())
for (var c = 0;c<n;c++){
    var frase = lines.shift()
    var d1 = parseInt(frase[0])
    var d2 = parseInt(frase[2])

    if(d1 ===d2){
        console.log(d1 * d2)
    } else if("A" <= frase[1] && frase[1] <= "Z"){
        console.log(d2 - d1)
    } else {
        console.log(d1 + d2)
    }
}

