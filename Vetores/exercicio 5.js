/*Crie um array chamado frutas com as frutas: "Maçã", "Banana", "Laranja". 
Utilize um loop para inverter a ordem dos elementos do array e exiba o array invertido no console.*/
let frutas = ["Maça","Banana","Laranja"]
let invertido = []
    for(let i= frutas.length -1; i >=0 ;i-- ){
        invertido.push(frutas[i])
        
    }
    console.log(invertido)