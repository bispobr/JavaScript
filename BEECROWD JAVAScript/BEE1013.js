function maior(a,b){
    maiorAb = (a+b+Math.abs(a-b))/2;
    return maiorAb;
}

var valores = lines.shift().trim().split(" ")
var a = parseInt(valores.shift())
var b = parseInt(valores.shift())
var c = parseInt(valores.shift())
ma = maior(c,maior(a,b))
console.log(`${ma} eh o maior`)