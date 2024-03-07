var numero = window.document.getElementById('idNum')
var tab =  window.document.getElementById('seltab')
var res = window.document.getElementById('res')
let num = []

function Dvalor(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista (n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

    
}

function Adicionar(){
    if (Dvalor(numero.value) && !inLista(numero.value,num)){ 
        num.push(Number(numero.value)) 
        var item =  document.createElement('option')
        item.text = `valor ${Number(numero.value)} foi adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Valor invalido ou já incontrado na lista!!!')
    }
    numero.value = ''
    numero.focus() 
   
}

function finalisar() { 
    if (num.length==0 ){
        window.alert('Adicione Valores')
    } else{
        let tot = num.length
        let maior = num[0]
        let menor = num[0] 
        let soma = 0
        let media = 0    
        for (let pos in num){
            soma += num[pos]
            if(num[pos]> maior)
               maior = num[pos]
            if(num[pos]< menor)
               menor = num[pos]
            
        }  
        media = (soma / (num.length)) 
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} elementos </p>`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        res.innerHTML += `<p> Soma de todos os valores ${soma}</p>`
        res.innerHTML += `<p> A media de todos os valores ${media}</p>`

    }   
}