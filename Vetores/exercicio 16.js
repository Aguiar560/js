//Crie um vetor com 10 números. Implemente uma função que retorne um novo vetor contendo apenas os números pares do vetor original.
    function numpares(vetor){
        let pares = []
    for(let i=0 ;i < vetor.length ;i++){
        if(vetor[i] % 2==0 ){
            pares.push(vetor[i])
        }
    
    }
    return pares

} 
let vetor = [1,88,56,34,16,75,82,13,24,11]
let par = numpares(vetor)
console.log(par)