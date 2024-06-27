var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let par = []
let impar = []


for (let c = 0;c <15;c++){

    let valor = parseInt(lines.shift())

    if (valor % 2 ==0){
        par.push(valor)
    }else{
        impar.push(valor)
    }

    if (par.length == 5){
        for (let d = 0;d<par.length;d++){
            console.log(`par[${d}] = ${par[d]}`)
        }

        for (let e = 0;e<par.length + 2;e++){
            par.shift()
            par.pop()
        }

    }

    if (impar.length == 5){
        for (let f = 0;f<impar.length;f++){
            console.log(`impar[${f}] = ${impar[f]}`)
        }

        for (let g = 0;g<impar.length +2;g++){
            impar.shift()
            impar.pop()
        }

    }
}

for (let f = 0;f<impar.length;f++){
    console.log(`impar[${f}] = ${impar[f]}`)
}

for (let d = 0;d<par.length;d++){
    console.log(`par[${d}] = ${par[d]}`)
}