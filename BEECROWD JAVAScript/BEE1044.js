var valores = lines.shift().trim().split(' ')
var a = parseInt(valores.shift())
var b = parseInt(valores.shift())
if(b > a){
    if(b% a===0){
        console.log(`Sao Multiplos`)
    }else{
        console.log(`Nao sao Multiplos`)
    }
}else{
    if(a% b===0){
        console.log(`Sao Multiplos`)
    }else{
        console.log(`Nao sao Multiplos`)
    }
}