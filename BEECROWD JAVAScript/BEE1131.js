var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [grenais,vitoriaGremio,vitoriaInter,empate] = [0,0,0,0];
var venceuMais = ` `;

while (true){
    var [inter, gremio] = lines.shift().trim().split(' ').map((x) => parseInt(x)); 
    

    grenais+=1

    if (inter > gremio){
        vitoriaInter+=1
    } else if (gremio > inter){
        vitoriaGremio +=1
    } else if (gremio == inter){
        empate += 1
    }

    if (vitoriaGremio > vitoriaInter){
        venceuMais = `Gremio`
    } else if (vitoriaInter > vitoriaGremio){
        venceuMais = `Inter`

    } else if (vitoriaGremio == vitoriaInter){
        venceuMais = `Nao houve vencedor`
    }

    console.log(`Novo grenal (1-sim 2-nao)`)

    var op = parseInt(lines.shift())

    if (op== 2){
        break;
    }

}

console.log(`${grenais} grenais`);
console.log(`Inter:${vitoriaInter}`);
console.log(`Gremio:${vitoriaGremio}`);
console.log(`Empates:${empate}`);
console.log(`${venceuMais} venceu mais`);


