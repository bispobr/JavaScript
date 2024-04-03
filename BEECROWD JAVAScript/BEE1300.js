var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
while(lines.length){
    var a = parseInt(lines.shift().trim());
    console.log(a % 6? 'N':'Y');
}