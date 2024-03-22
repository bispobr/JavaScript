var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dentro = 0
var fora = 0
var n = parseInt(lines.shift())
for (var c = 1;c <= n;c++){
    var x = parseInt(lines.shift())
    if (x >= 10 & x <=20){
        dentro = dentro + 1
    } else{
        fora = fora + 1
    }
}

console.log(`${dentro} in`)
console.log(`${fora} out`)