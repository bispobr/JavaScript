var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = lines.shift();

while(lines.length != 0){

    console.log(n> 0? "vai ter duas!":"vai ter copa!")
    n = lines.shift();
}