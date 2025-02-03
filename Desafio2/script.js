let numeros = []
let numero =document.getElementById('numero')
let res= document.getElementById('divres')
let lista = document.getElementById('lista')
let area = document.getElementById('adicionar')
    area.addEventListener('mouseenter', entrar)
    area.addEventListener('mouseout', sair)
function entrar(){
    area.style.backgroundColor= 'green'
}
function sair(){
    area.style.backgroundColor= 'red'
}
function adicionar(){
        if(isNumero(numero.value) && !inlista(numero.value,numeros)){  
            numeros.push(Number(numero.value))
            let num = document.createElement('option')
            num.textContent =`Valor ${numero.value} adicionado.`
            lista.appendChild(num)
            res.innerHTML=''
        }else{
            alert("Coloque um valor Válido")
        }
        numero.value=''
        numero.focus()
    }
function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inlista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}    
function finalizar(){
        if(numeros.length ==0){
            alert("Adicione algum valor")
        }else{
    let teste=numeros.length
    let maior = numeros[0]
    let menor = numeros[0]
    let soma = 0
    let media = 0
        for(let i=0;i<numeros.length;i++){ 
            soma+=numeros[i]
            if(numeros[i]> maior){
                maior=numeros[i]
            }else if(numeros[i]< menor){
                menor = numeros[i]
            }    
        }
        media = soma/teste    
    res.innerHTML=`<p>Ao todo, temos <strong>${teste} </strong>números cadastrados</p><p>O maior valor informado foi <strong>${maior}</strong>.</p><p>O menor valor informado foi <strong>${menor}</strong></p>
    <p>Somando todos os valores, temos <strong>${soma}</strong></p><p>A média dos valores digitados é<strong> ${media.toFixed(2)}</strong></p>.`
    } 
}
function limpar(){
    lista.innerHTML=''
    res.innerHTML=''
}

    





        

