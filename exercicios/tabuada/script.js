function calcular() {
    var res = window.document.getElementById('res')
    var txtValor = document.getElementById('idinputValor')
    var numValor = Number(txtValor.value)
    res.innerHTML = `valor é ${numValor}`
}