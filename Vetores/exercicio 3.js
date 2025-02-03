/*Crie um array chamado numeros com os valores: 1, 2, 3, 4, 5. Utilize um loop for para criar um novo array chamado quadrados, 
onde cada elemento é o quadrado dos números do array original. 
Exiba o array quadrados no console.*/
let numeros = [1,2,3,4,5]
let quadrados = []
    for(i=0;i<numeros.length;i++){
        quadrados.push(numeros[i]**2)        
    }
    console.log(quadrados)
    