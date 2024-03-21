var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

x = parseInt( lines.shift())
for (var c = x;c<= x + 11;c++){
    if ( c %2 > 0){
        console.log(c);
    }
    
}