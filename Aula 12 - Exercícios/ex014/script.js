
function carregar() {
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var horas = (new Date()).getHours()

    // var horas = 19

    mensagem.innerText = `Agora são ${horas} horas.`

    if (horas >= 0 && horas < 12) {
        imagem.src = "imagens/fotomanha.png"
        document.body.style.background = "#e2cd9f"
    } else if (horas <= 18) {
        imagem.src = "imagens/fototarde.png"
        document.body.style.background = "#b9846f"
    } else {
        imagem.src = "imagens/fotonoite.png"
        document.body.style.background = "#515154"
    }
}
