
function verificar()
{
    let ano_atual = (new Date()).getFullYear()
    let ano_informado = Number(document.getElementById('ano_nascimento').value)
    let resultado = document.getElementById('resultado')

    if (ano_informado == 0 || ano_informado > ano_atual) {
        alert('ERRO! Verifique os dados e tente novamente')
    } else {
        let sexo = document.getElementsByName('sexo')
        let idade = ano_atual - ano_informado
        let genero = sexo[0].checked ? 'Homem' : 'Mulher'

        // Criando um elemento img com id igual a 'foto'
        let imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')

        if (genero == 'Homem') {
            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                imagem.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                imagem.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else {
            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                imagem.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                imagem.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(imagem)
    }
}
