var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift())

for (var c = 0;c < n ; c++){
    
    var [x,y] = lines.shift().trim().split(' ').map((x) => parseInt(x))

    if (y == 0){
        console.log(`divisao impossivel`)
    } else{
        console.log((x / y).toFixed(1));
    }
}