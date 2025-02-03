var tab= document.getElementById('tabuada')
function calcular(){
    let num= Number(document.getElementById('num').value)
    tab.innerHTML=``
        if(document.getElementById('num').value.length==0){
            alert("Insira um número")
        }else{
        for(let c=0;c<=10;c++){
       let item = document.createElement('option') 
        item.textContent= `${num} x ${c} = ${num*c}`
        tab.appendChild(item)
          
        }
    }
}
function limpar(){
    let num= document.getElementById('num')
    tab.innerHTML=` `
    num.value=''
}