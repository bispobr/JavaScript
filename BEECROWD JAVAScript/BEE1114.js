var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while(lines.length){
    var senha = parseInt(lines.shift())

    if (senha == 2002){
        console.log(`Acesso Permitido`)
        break;
    }
    console.log(`Senha Invalida`)
}