//Crie um vetor com 8 números inteiros. Escreva uma função que retorne o número mais próximo de 10 no vetor.
function num(){
    let vetor =[35,80,134,22,79,65,123,55,70,29]
    let maisP = vetor[0]
        for(let i=1;i<vetor.length;i++){
            if(Math.abs(vetor[i]-10) < Math.abs(maisP -10)){
                maisP=vetor[i]
            }
        }
    return maisP
}
    let maispr = num()
    console.log(maispr)