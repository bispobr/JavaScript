function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.gethours()
    msg.innerHTML = `Agora são ${hora} horas`
}
