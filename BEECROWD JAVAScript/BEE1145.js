var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [x, y] = lines.shift().trim().split(" ").map((x) => parseInt(x))


var inicio =1;

for (var c = 0;c < y;c++){
    for(var d = inicio;d < inicio + x;d++){
        if (d == y+1){
            break;
        }
        process.stdout.write(d+ " ");
    }
    process.stdout.write("\n")
    inicio += 3
    if (d == y +1){
        break;
    } 
}

