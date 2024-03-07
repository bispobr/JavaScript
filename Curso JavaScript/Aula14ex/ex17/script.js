function gerar(){
    var numero = window.document.getElementById('idNum')
    var tab =  window.document.getElementById('seltab')

    if (numero.value.length == 0){ 
        window.alert('Digite um numero!!!')
    } else{
        var n = Number(numero.value)
    }
    
    for (c = 0; c <= 10; c++){
        var item =  document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        tab.appendChild(item)
    }
   
}