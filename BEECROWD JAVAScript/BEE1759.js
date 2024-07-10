var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift())

for (let index = 0; index < n-1; index++) {
    process.stdout.write('Ho ');
}
console.log("Ho!")