var valores = lines.shift().trim().split(" ")
var a = parseFloat(valores.shift())
var b = parseFloat (valores.shift())
var c = parseFloat(valores.shift())
var tri = (a * c)/2
var cir = (3.14159 * Math.pow(c,2))
var tra = ((a + b)/2) * c
var qua = Math.pow(b,2)
var ret = a *b


console.log(`TRIANGULO: ${tri.toFixed(3)}`)
console.log(`CIRCULO: ${cir.toFixed(3)}`)
console.log(`TRAPEZIO: ${tra.toFixed(3)}`)
console.log(`QUADRADO: ${qua.toFixed(3)}`)
console.log(`RETANGULO: ${ret.toFixed(3)}`)