var ini, fim,passo, red
function calcular(){
    ini= Number(document.getElementById('inicio').value)
    fim= Number(document.getElementById('final').value)
    passo= Number(document.getElementById('passo').value)
    res = document.getElementById('res')
        if(document.getElementById('inicio').value.length==0 || document.getElementById('final').value.length==0 || document.getElementById('passo').value.length==0){
            alert('ERRO!!-Preencha todos os campos!!')
            res.innerHTML=`Impossivel Contar`
        }else{
            if(passo<=0){
            alert('Passo Invalidor, Considerar PASSO 1')
            passo = 1
            }
            res.innerHTML=` `
                if(ini < fim){
            for(let i = ini; i <= fim; i+=passo){
            res.innerHTML+=` ${i}👉🏻`
            }
        }else{
            for(let i = ini; i >= fim; i-=passo){
                res.innerHTML+=` ${i}👉🏻`
                }
        }
        res.innerHTML+= `🏁`
    }
}
function limpar(){
    res = document.getElementById('res')
    ini= document.getElementById('inicio')
    fim= document.getElementById('final')
    passo= document.getElementById('passo')
    ini.value =''
    fim.value = ''
    passo.value=''
    res.innerHTML=` `
}







