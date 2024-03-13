var valores = lines.shift().trim().split(" ")
var ordem = [...valores]
const comp = (a, b) => a - b;
ordem.sort(comp);

for (var pos in ordem){
    console.log(ordem[pos])
}
console.log()
for (var pos in valores){
    console.log(valores[pos])
}