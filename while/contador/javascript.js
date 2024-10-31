function verificar() {
    var ini = document.getElementById('inputini')
    var ininumber = Number(ini.value)
    var fim = document.getElementById('inputfim')
    var fimnumber = Number(fim.value)
    var pas = document.getElementById('inputpas')
    var pasnumber = Number(pas.value)
    var res = document.getElementById('res')
    res.innerHTML = ` `
    // res.innerHTML = (`Inicio: ${ininumber} <br>`)
    // res.innerHTML += (`Fim: ${fimnumber} <br>`)
    // // res.innerHTML += (`Passe: ${pasnumber} <br>`)
    // for(var c = 1; c <= 4; c++) {
    //     console.log(c)
    // }
    // console.log('Fim!')
    // for(var i = ininumber; i = fimnumber; i ++) {
    //     res.innerHTML += (i)
    // }
    tot = 0
    if (ininumber.valueOf.length < 0 || pasnumber == 0 || fimnumber == 0){
        window.alert('Erro! Você precisa digitar em todos os campos!')
        res.innerHTML += (`<p><strong>Esperando números nos campos acima...</strong></p>`)
    } else if (pasnumber < 0) {
        window.alert('O contador de passos precisa não pode ser menor que 0! Se desejar contar em ordem decrescente digita o número maior em ínicio, gênio!')   
    } else {
        if (ininumber < fimnumber){
            for (let c = ininumber; c <= fimnumber; c += pasnumber) {
                res.innerHTML += ` ${c} . `
                tot += 1
                if (tot == 10) {
                    res.innerHTML += `<br>`
                    tot = 0
                } 
            }
        } else {
            for (let c = ininumber; c >= fimnumber; c -= pasnumber) {
                res.innerHTML += ` ${c} .`
            }
        }
    }
}