var valores = lines.shift().trim().split(" ")
var horaI = parseInt(valores.shift())
var horaF = parseInt(valores.shift())
if(horaF <= horaI){
    horas = horaF + 24 - horaI
} else{
    horas = horaF - horaI
}
console.log(`O JOGO DUROU ${horas} HORA(S)`)