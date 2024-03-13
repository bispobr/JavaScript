var valores = lines.shift().trim().split(' ')
valores.sort()
var c = parseFloat(valores.shift())
var b = parseFloat(valores.shift())
var a = parseFloat(valores.shift())

if (a >= b + c){
    console.log(`NAO FORMA TRIANGULO`)
} else if(Math.pow(a,2) == (Math.pow(b,2) + Math.pow(c,2))){
    console.log(`TRIANGULO RETANGULO`)
} else if (Math.pow(a,2) > (Math.pow(b,2) + Math.pow(c,2))){
    console.log(`TRIANGULO OBTUSANGULO`)
} else if(Math.pow(a,2) < (Math.pow(b,2) + Math.pow(c,2))){
    console.log(`TRIANGULO ACUTANGULO`)
}

if (a==b && b==c ){
    console.log(`TRIANGULO EQUILATERO`)
} else if (a===b || b===c){
    console.log(`TRIANGULO ISOSCELES`)
}
Math.pow()