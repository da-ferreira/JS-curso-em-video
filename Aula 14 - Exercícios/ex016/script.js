
function contador()
{
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let resultado = document.getElementsByClassName('resultado')[0]

    if (inicio == '' | fim == '') {
        resultado.innerHTML = `Impossivel contar`
    } else {
        if (passo == '0' || passo == '') {
            alert('Passo inválido! Considerando passo 1')
            passo = 1
        }

        resultado.innerHTML = 'Contando: '

        for (let i = Number(inicio); i < Number(fim); i += Number(passo)) {
            resultado.innerHTML += `${i} \u{27A1} `
        }

        resultado.innerHTML += `FIM`
    }

}
