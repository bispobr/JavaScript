var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift())
var y = parseInt(lines.shift())

if (x > y){
    [x,y] = [y,x]
}

for (var c = x + 1; c < y ;c++){
    if (c % 5 == 2 || c % 5 == 3){
        console.log(c)
    }
}