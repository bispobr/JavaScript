var valores = lines.shift().trim().split(" ")
var cod = parseInt(valores.shift());
var qtd = parseInt(valores.shift());
var total;

switch(cod){
    case 1: total = qtd * 4.00;
            break;
    case 2: total = qtd * 4.50;
            break;
    case 3: total = qtd * 5.00;
            break;
    case 4: total = qtd * 2.00;
            break;
    case 5: total = qtd * 1.50;
            break;
}

console.log(`Total: R$ ${total.toFixed(2)}`);