
function tabuada()
{
    let numero = document.getElementById('numero').value
    let tabuada = document.getElementById('tabuada')

    if (numero == '') {
        alert('Por favor informe o número')
    } else {
        numero = Number(numero)
        tabuada.innerHTML = ''

        for (let i=1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero * i}`
            item.value = `value_${i}`
            tabuada.appendChild(item)
        }

    }
}
