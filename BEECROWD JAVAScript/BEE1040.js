var valores = lines.shift().trim().split(' ')
var n1 = parseFloat(valores.shift())
var n2 = parseFloat(valores.shift())
var n3 = parseFloat(valores.shift())
var n4 = parseFloat(valores.shift())
var media = ((n1 *2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10
console.log(`Media: ${media.toFixed(1)}`)
if(media >= 7.0){
    console.log (`Aluno aprovado.`)
} else if (media < 5.0){
    console.log(`Aluno reprovado.`)
} else if (media >= 5.0 && media <= 6.9){
        console.log(`Aluno em exame.`)
        var exame = parseFloat(lines.shift())
        console.log (`Nota do exame: ${exame.toFixed(1)}`)
        media = (media + exame)/2
        if (media > 5.0){
            console.log(`Aluno aprovado.`)
        } else{
            console.log(`Aluno reprovado.`)
        }
        console.log(`Media final: ${media.toFixed(1)}`)
            
}