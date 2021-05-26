var num = document.getElementById('num')
var num2 = document.getElementById('num2')
var res = document.getElementById('res')

function calcular (){
    var n = Number(num.value)
    var n2 = Number(num2.value)
    var resu = n / 100 * n2

    if (n == 0 || n2 == 0) {
        window.alert('Por favor digite um número')
    } else {
        res.innerHTML = `<p>${n}% de ${n2} é igual a ${resu}</p>`

    }
}

function limpar(){
    res.innerHTML = `<p>Resultado.</p>`
    document.getElementById('num').value = ''
    document.getElementById('num2').value = ''
    
}
