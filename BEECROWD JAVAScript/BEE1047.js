var valores = lines.shift().trim().split(" ")
var hi = parseInt(valores.shift())
var mi = parseInt(valores.shift())
var hf = parseInt(valores.shift())
var mf = parseInt(valores.shift())

mi = mi + (hi*60)
mf = mf + (hf * 60)
tempo = mf - mi

if(tempo <= 0){
    tempo = tempo + (24*60)
}

hora = tempo / 60
minuto = tempo % 60

console.log(`O JOGO DUROU ${parseInt(hora)} HORA(S) E ${minuto} MINUTO(S)`)