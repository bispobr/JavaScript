var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

function qtdcaractere(palavra, caractere, inicio, fim) {
    let count = 0;

    
    const substring = palavra.slice(inicio, fim);

    for (let i = 0; i < substring.length; i++) {
        if (substring[i] === caractere) {
            count++;
        }
    }

    return count;
}

let n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
  let entrada = lines.shift().trim();
  let posicao = entrada.indexOf("k");

  let quantidade1 = qtdcaractere(entrada,"a",0,posicao)
  let quantidade2 = qtdcaractere(entrada, "a", posicao, entrada.length);

  let resposta= "k" 

   for (let i = 0; i < quantidade1 * quantidade2; i++) {
     resposta += "a";
   } 

  console.log(resposta);
}
