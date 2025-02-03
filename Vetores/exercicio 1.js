//Crie um array chamado numeros contendo os números: 5, 10, 15, 20, 25. Utilize um loop for para somar todos os números do array e exibir o resultado no console.
let numeros = [5,10,15,20,25]
let soma = 0
    for(i=0;i<numeros.length;i++){
        soma+=numeros[i]
    }
    console.log(soma)