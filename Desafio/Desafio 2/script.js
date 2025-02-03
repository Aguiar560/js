let num = document.getElementById('numero')
let tabela = document.getElementById('tabela')
let res = document.getElementById('res')
let segunda = document.getElementById('segunda')
let terceira = document.getElementById('terceira')
let guarda=[]

function NumeroValido(n){
    if(Number(n) >=1 && Number(n)<=1000){
        return true
    }else{
        return false
    }
}


function NaLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}


function adicionar(){
    if(NumeroValido(num.value) && !NaLista(num.value,guarda)){
        guarda.push(Number(num.value))
        var item = document.createElement('option')
        item.textContent=`Número ${num.value} adicionado`
        tabela.appendChild(item)  
        res.innerHTML=''
        segunda.innerHTML=''
    }else{
        alert('Insira valor Válido!!')
    }
    num.value =' '
    num.focus()
}

function finalizar(){
    let maior = guarda[0]
    let menor = guarda[0]
    let soma = 0
    let media = 0
        for(let i=0;i<guarda.length;i++){ 
            soma+= guarda[i]
            if(guarda[i] > maior){
                maior = guarda[i]
            }else if(guarda[i] < menor){
                menor = guarda[i]
            }  
        }   
        for(let i=0;i<guarda.length;i++){
            let item
            if(guarda[i]%2==0){
                item = document.createElement('option')
                item.innerHTML=`Número ${guarda[i]}`
                segunda.appendChild(item)
            }else{
                item = document.createElement('option')
                item.textContent=`Número ${guarda[i]}`
                terceira.appendChild(item)
        }
    }
    media = soma/guarda.length
    res.innerHTML=`<p> A quantidade de números é <strong>${guarda.length}</strong></p>`
    res.innerHTML+=`<p> O maior número é <strong>${maior}</strong></p>`
    res.innerHTML+=`<p> O menor número é <strong>${menor}</strong></p>`
    res.innerHTML+=`<p> A soma dos números é <strong>${soma}</strong>.`
    res.innerHTML+=`<p> A média dos números é <strong> ${media.toFixed(2)}</strong>`
}


function limpar(){
    res.innerHTML=''
    tabela.innerHTML=''
    segunda.innerHTML=''
    terceira.innerHTML=''
}
   
    