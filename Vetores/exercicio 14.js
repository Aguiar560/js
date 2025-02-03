//Crie um vetor com 6 números. Implemente uma função que encontre a média aritmética dos números e imprima o resultado.
function media(){
    let num = [3,5,80,56,71,13]
    let medias= 0
    let soma = 0
        for(let i=0;i<num.length;i++){ 
            soma+= num[i] 
        } 
        medias = soma/num.length
        return medias
    }
    let total = media()
    console.log(total)