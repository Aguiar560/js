var tabuada = document.getElementById('tabuada-list')
function tabuadas(){
    let numero = Number(document.getElementById('num').value)
        if(document.getElementById('num').value.length==0) {
           alert('ERRO-Digite um Número')
        } else {
            tabuada.innerHTML = " "
            for(let c=1;c<=10;c++) {
                let item = document.createElement('option')
                item.textContent=` ${numero} x ${c} = ${numero*c}`
                tabuada.appendChild(item)
            }
        }
}
function limpar(){
    let numero = document.getElementById('num')
        tabuada.innerHTML=''
        numero.value=''  
}

