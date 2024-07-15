var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let resposta

let casos = parseInt(lines.shift())

for (let i = 1; i <=casos ; i++) {
    let [a, b] = lines.shift().trim().split(' ');

    if((a == "tesoura" && b == "papel") || (a == "papel" && b == "pedra") || (a == "pedra" && b == "lagarto") || (a == "lagarto" && b == "Spock") || (a == "Spock" && b == "tesoura") || (a == "tesoura" && b == "lagarto") || (a == "lagarto" && b == "papel") || (a == "papel" && b == "Spock") || (a =="Spock" && b == "pedra") || (a == "pedra" && b == "tesoura")){
        resposta = "Bazinga!";
    } else if(a ==b){
        resposta = "De novo!";
    } else{
        resposta = "Raj trapaceou!";
    }
    console.log(`Caso #${i}: ${resposta}`)
    

}
