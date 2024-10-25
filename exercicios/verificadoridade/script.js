function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var peano = document.getElementById('ibirth')
    var res = document.getElementById('res')
    if (peano.value.length == 0 || peano.value > ano || peano.value <= 0){
        window.alert('Erro no campo "Ano de nascimento"')
    } else {
        var psexo = document.getElementsByName('sexo')
        var idade = ano - Number(peano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (psexo[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'imagens/homem/crianca.png')
            } else if (idade <21) {
                img.setAttribute('src', 'imagens/homem/jovem.png')
            } else {
                img.setAttribute('src', 'imagens/homem/homem.png')
            }
        } else if (psexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'imagens/mulher/crianca.png')
            } else if (idade <21) {
                img.setAttribute('src', 'imagens/mulher/jovem.png')
            } else {
                img.setAttribute('src', 'imagens/mulher/mulher.png')
                
            }
        } else {
            window.alert('Erro na verificação do sexo!')
        }
        res.innerHTML = (`Verificado que é ${genero.toLowerCase()} com ${idade} anos.<br>`)
        res.appendChild(img)
    }
}