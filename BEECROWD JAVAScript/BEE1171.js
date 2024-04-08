var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var y = Array(2001);
y.fill(0);
for (var i = 0; i < n; ++i) {
  var x = parseInt(lines.shift());
  y[x] += 1;
}
for (var i = 1; i < 2001; ++i) {
  if (y[i] > 0) console.log(`${i} aparece ${y[i]} vez(es)`);
}

