var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

n = parseInt(lines.shift())
var inicio = 1
for (var c = 0; c < n; c++){
    for (var d = inicio;d < inicio + 3;d++){
        process.stdout.write(d+ " ");
    }
    process.stdout.write("PUM\n")
    inicio +=4

}