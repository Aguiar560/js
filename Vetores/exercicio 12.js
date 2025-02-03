//Crie um vetor com 10 números inteiros. Implemente uma função que encontre o maior número do vetor e retorne esse valor.
let vetor=[10,5,98,64,20,11,34,70,8,13]
let maior= vetor[0]
    for(let i=0;i<vetor.length;i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
    }
    console.log(maior)