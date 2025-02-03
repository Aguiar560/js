function contar() {
    let ini = Number(document.getElementById('num').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    let res = document.getElementById('res')
       
    if( isNaN(ini)|| isNaN(fim) || isNaN(passo) || passo<=0){
         alert('ERRO!!')
    }else{
        if(ini < fim){
            for(let c = ini; c<=fim; c+=passo){
        res.innerHTML += ` ${c}\u{1F449}`
            }
        }else{
            for(let c = ini; c>=fim; c-=passo){
        res.innerHTML += ` ${c}\u{1F449}`
            }
        }
         res.innerHTML += `😎` 
    }
}
