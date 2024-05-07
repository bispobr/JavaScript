var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift())

while (x != 0){
    for (var c = 1;c <= x;c++){
        process.stdout.write(c+ " ");
    }
}