var valores = lines.shift().trim().split(" ")
var a = parseFloat(valores.shift())
var b = parseFloat(valores.shift())
var c = parseFloat(valores.shift())
if (a < b + c && b < a + c && c < a + b){
    console.log(`Perimetro = ${(a + b + c).toFixed(1)}`)
} else(
    console.log(`Area = ${(((a + b)*c)/2).toFixed(1)}`)
)