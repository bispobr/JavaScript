var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (lines.length){

    var [x,y] = lines.shift().trim().split(' ').map((x) => parseInt(x))

    if (x == y) {
        break;
    }

    if (x > y){
        console.log(`Decrescente`)
    } else{
        console.log(`Crescente`)
    }
} 