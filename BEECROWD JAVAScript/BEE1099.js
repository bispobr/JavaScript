var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var n = parseInt(lines.shift());
for (var c = 0; c<n;c++){
    let [x, y] = lines.shift().trim().split(' ').map((x) => parseInt(x));
    
    if (x < y){
        [x, y] = [y, x];
    }
    
    if (x == y){
        console.log(0)
    } else{
        var soma = 0
        for (var d = y +1 ; d < x;d+=1){
            if( d %2 != 0){
                soma +=d
            }
        }
        console.log(soma)
    }
   
}