function calcular() {
    var res = window.document.getElementById('res')
    var txtValor = document.getElementById('idinputValor')
    var numValor = Number(txtValor.value)
    res.innerHTML = ` `
    tot = 0
    if (numValor != 0) {
        res.innerHTML = `<hr>`
        for (let i = 1; i <= 10; i++) {
            tot += 1
            let resValor = numValor * i
            res.innerHTML += ` ${numValor} x ${i} = ${resValor} <br> `
            // if (tot == 5) {
            //     res.innerHTML += `<br>`
            // }
        }
    res.innerHTML += `<hr>`
    } else {
        window.alert('Insira um valor')
    }
}