let listnumeros = []
let lista = document.getElementById('idlst')
let res = document.getElementById('res')
let num = document.getElementById('idnum')

function isNum(n){
    if (Number(n) >= 1){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNum(num.value) && !inLista(num.value, listnumeros)){
        listnumeros.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value} adicionado.`
        lista.appendChild(item)
        num.value = ''
        num.focus()
        res.innerHTML = ''
    }else {
        window.alert('Valor invalido!')
        num.focus()
    }
    
}


function acharMaior(){
    let maior = listnumeros[0]
    for (let n in listnumeros) {
        if (listnumeros[n] > maior) {
            maior = listnumeros[n]
        }
    }
    return maior
}

function acharMenor(){
    let menor = listnumeros[0]
    for (let n in listnumeros){
        if (listnumeros[n] < menor){
            menor = listnumeros[n]
        }
    }
    return menor
}

function acharSoma(){
    let soma = 0
    for (let n in listnumeros){
        soma += listnumeros[n]
    }
    return soma
}

function acharMedia(){
    let soma = 0
    for (let n in listnumeros){
        soma += listnumeros[n]
    }
    let media = 0
    media = (soma/listnumeros.length)
    return media
}

function limpar(){
    res.innerHTML = ''
    listnumeros = []
    lista.innerHTML = ''
}

function finalizar() {
    if (listnumeros.length == 0){
        res.innerHTML = `<hr><p class="erro">Você não adicionou nenhum número!</p>`
    }else {
        res.innerHTML = ''
        // for (let pos in listnumeros){
        //     res.innerHTML += `A posição ${pos} tem o valor ${(listnumeros[pos])} <br>`
        // }
        res.innerHTML += `<p>| Total: ${listnumeros.length}<br> </p>`
        res.innerHTML += `<p>| Maior valor: ${acharMaior(listnumeros)} <br></p>`
        res.innerHTML += `<p>| Menor valor: ${acharMenor(listnumeros)} <br></p>`
        res.innerHTML += `<p>| Soma: ${acharSoma(listnumeros)} <br></p>`
        res.innerHTML += `<p>| Média: ${acharMedia(listnumeros).toFixed(2)} <br></p>`
    }
}

// const enterinput = document.getElementById('idnum')
// enterinput.addEventListener('keypress', function(event) {
// caso eu queria dar enter apenas se o input tiver em focus -> document.getElementById("idnum").addEventListener

// Da maneira de baixo enquanto eu apertar Enter vai chamar a function adicionar
document.addEventListener("keydown", function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        adicionar();
    }
});