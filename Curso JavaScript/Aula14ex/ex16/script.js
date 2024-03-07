function carregar(){
    var ini = window.document.getElementById('idinicio')
    var end = window.document.getElementById('idFim')
    var pass =  window.document.getElementById('idPasso')
    var res = window.document.getElementById('res')
   
    if (ini.value.length == 0 || end.value.length == 0 || pass.value.length == 0  ){
        window.alert('Faltam dados')
    } else{
        
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(end.value)
        var p = Number(pass.value)
        if(p <= 0){
            window.alert('passo Invalido!')
        }
        if (i < f){
            //contagem crescente
            for (var c = i;c <= f ; c += p){
                res.innerHTML += `${c} `
            }
        } else{
            //contagem regressiva
            for (var c = i;c >= f; c-= p){
                res.innerHTML += `${c} `
            }
            
        }
        
    }
}