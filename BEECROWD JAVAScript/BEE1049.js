
var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');


var palavra1 = lines.shift()

if (palavra1 === "vertebrado"){
    var palavra2 = lines.shift()
    if(palavra2 === "ave"){
        var palavra3 = lines.shift()
        if(palavra3 === "carnivoro"){
            console.log(`aguia`)
        } else if(palavra3 === "Onivoro"){
            console.log(`pomba`)
        } 

    } else if (palavra2 === "mamifero"){
        var palavra3 = lines.shift()
         if(palavra3 === "onivoro"){
            console.log(`homem`)
        } else if(palavra3 === "herbivoro"){
            console.log(`vaca`)
        } 
    }

}  else {
    
    var palavra2 = lines.shift()
    if(palavra2 === "inseto"){
        var palavra3 = lines.shift()
         if(palavra3 === "hematofago"){
            console.log(`pulga`)
        } else if(palavra3 === "herbivoro"){
            console.log(`lagarta`)
        } 

    } else if (palavra2 == "anelideo"){
        var palavra3 = lines.shift()
         if(palavra3 === "hematofago"){
            console.log(`sanguessuga`)
        } else if(palavra3 === "onivoro"){
            console.log(`minhoca`)
        } 
    }
}