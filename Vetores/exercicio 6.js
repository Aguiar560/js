/*Crie um array chamado numeros com os seguintes números: 12, 45, 3, 78, 29.
 Utilize um loop para encontrar o maior número do array e exiba-o no console.*/
 let numeros = [12,45,3,78,29]
 let maiorNumero = numeros[0]
     for(i = 1;i < numeros.length;i++ ){
        if(maiorNumero < numeros[i]){
            maiorNumero = numeros[i]
        }
     }
     console.log(maiorNumero)   