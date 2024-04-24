var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (lines.length){


   var [m,n] = lines.shift().trim().split(' ').map((x) => parseInt(x))

   if (m == 0 || n == 0){
        break;
   }

   if (m>n){
    [m,n] = [n,m]
   }

   var soma = 0
   var numeros = []
   for (var c= m; c <= n;c++){
    numeros.push(c)
    soma += c
   }

   console.log(`${numeros.join(' ')} Sum=${soma}`);
   
}


    
    
