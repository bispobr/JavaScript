var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let teste = 1
while (true) {
    let n= parseInt(lines.shift())

    if(n === 0){
        break;
    }

    console.log(`Teste ${teste}`);
    teste+= 1

    let i = parseInt(n / 50);
    let resto = n % 50
    let j = parseInt(resto / 10)
    resto = resto % 10;
    let k = parseInt(resto/ 5); 
    resto = resto % 5; 
    let l = parseInt(resto / 1);
    
    console.log(`${i} ${j} ${k} ${l}`)
    console.log()
}