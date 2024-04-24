var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (lines.length){

var [x,y] = lines.shift().trim().split(' ').map((x) => parseInt(x))

if (x==0 || y == 0){
    break
}

if (x > 0){
    if (y > 0){
        console.log(`primeiro`)
    } else if (y < 0){
        console.log(`quarto`)
    }
} else if (x < 0){
    if (y > 0){
        console.log(`segundo`)
    } else if (y < 0){
        console.log(`terceiro`)
    }
}

}