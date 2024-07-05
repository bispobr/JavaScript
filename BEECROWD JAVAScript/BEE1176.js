var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let fib = []
let termo

let t = parseInt(lines.shift())

for (let c = 0;c <t;c++){

        let n = parseInt(lines.shift())
                    
        let ultimo = 1;
        let penultimo = 1;

        if (n==0){
            fib[c] = 0;
        }else if (n==1 || n==2){
           fib[c] = 1;
        }else{
            for(let cont =3;cont <=n;cont++){
                termo = ultimo + penultimo;
                penultimo = ultimo;
                ultimo = termo;
            }
            
            fib[c] = termo;
        }
        console.log(`Fib(${n}) = ${fib[c]}`)
}
