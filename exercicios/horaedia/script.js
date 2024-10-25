var agora = new Date()
function carregar() {
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    var segundo = agora.getSeconds()
    var diasem = agora.getDay()
    switch(diasem) {
        case 0:
            diasem = 'Domingo'
            break
        case 1:
            diasem = 'Segunda-feira'
            break
        case 2:
            diasem = 'Terça-feira'
            break
        case 3:
            diasem = 'Quarta-feira'
            break
        case 4:
            diasem = 'Quinta-feira'
            break
        case 5:
            diasem = 'Sexta-feira'
            break
        case 6:
            diasem = 'Sábado'
            break
    }
    var diacal = agora.getDate()
    var mes = agora.getMonth()
    var ano = agora.getFullYear()
    var a = document.getElementById('msg')
    a.innerText=`Horário atual: ${hora}:${minuto}
    Dia atual: ${diacal}/${mes}/${ano} - ${diasem}`
    var foto = document.getElementById('foto')
    if (hora >= 6 && hora <= 12) {
        foto.src = 'imagens/manha.jpg'
        document.body.style.background = 'linear-gradient(to top, #FDF98B, #ECBB40, #D47807)';
    } else if (hora >= 12 && hora <= 17) {
        foto.src = 'imagens/tarde.jpg'
        document.body.style.background = 'linear-gradient(to top, #11192C, #FF750E, #FFC563)';
    } else {
        foto.src = 'imagens/noite.jpg'
        document.body.style.background = 'linear-gradient(to top, #660082, #592368, #371F3D, #2F2233, #312B33, black)';
    }
}