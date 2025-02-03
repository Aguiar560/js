function jogar(){
    let numeros = Number(document.getElementById('numeros').value)
    let numdados = document.getElementById('numdados')
    let numimg = document.getElementById('dadosimg')
    let valores = []
    let img = []
    let res = document.getElementById('res')
        if(numeros <=0 || isNaN(numeros)){
            alert('Insira valor CORRETO!!')
        }else{
            for(let i = 0;i < numeros; i++){
                let valor = Math.floor(Math.random()*6 )+1
                valores.push(valor)
                img.push(`<img src="${valor}.png">`) 
                res.innerHTML=`Quantidade de Dados: ${numeros}.`             
            } 
        }
            if(valores.some(x => [1,2,3,4,5,6].includes(x))){
                let es = ''
                let quant1 = valores.filter(x => x === 1).length
                let quant2 = valores.filter(x => x === 2).length
                let quant3 = valores.filter(x => x === 3).length
                let quant4 = valores.filter(x => x === 4).length
                let quant5 = valores.filter(x => x === 5).length
                let quant6 = valores.filter(x => x === 6).length
                if(quant1 >1 || quant2 >1 || quant3 >1 || quant4 >1 || quant5 >1 || quant6 >1){
                    es = 'es'
                }
                if(quant1 >0){
                res.innerHTML+=`<p>O número 1 foi sorteado ${quant1} vez${es}.</p>`}
                if(quant2 >0){
                res.innerHTML+=`<p>O número 2 foi sorteado ${quant2} vez${es}.</p>`}
                if(quant3 >0){
                res.innerHTML+=`<p>O número 3 foi sorteado ${quant3} vez${es}.</p>`}
                if(quant4 >0){
                res.innerHTML+=`<p>O número 4 foi sorteado ${quant4} vez${es}.</p>`}
                if(quant5 >0){
                res.innerHTML+=`<p>O número 5 foi sorteado ${quant5} vez${es}.</p>`}
                if(quant6 >0){
                res.innerHTML+=`<p>O número 6 foi sorteado ${quant6} vez${es}.</p>`}  
            }
    numdados.textContent=`Números Sorteados: ${valores.join(', ')}`  
    numimg.innerHTML= img.join('')
}

    
     
        
