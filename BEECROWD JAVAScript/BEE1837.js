var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let q

valores = lines.shift().trim().split(" ").map((x) => parseInt(x))

if (valores[0] > 0){
    if (valores[1] > 0)   {
         q = Math.floor(valores[0]/ valores[1]);
    } else {
        q = Math.ceil(valores[0]/ valores[1]);
    }
} else {
    if (valores[1] > 0)   {
         q = Math.floor(valores[0]/ valores[1]);
       
    } else {
        q = Math.ceil(valores[0]/ valores[1]);

    }   

}

console.log(`${q} ${valores[0] - (valores[1] * q)}`)

