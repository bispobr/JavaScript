var idade = parseInt(lines.shift());

var ano = Math.floor(idade / 365);
idade %= 365;
var mes = Math.floor(idade / 30);
idade %= 30;

console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${idade} dia(s)`);