const { Console } = require('console');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

x = lines.shift()
for (var c = 1;c<= x;c++){
    if ( c %2 > 0){
        console.log(c);
    }
    
}
