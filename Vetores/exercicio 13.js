//Crie um vetor de 5 strings. Escreva uma função que receba esse vetor e retorne um novo vetor contendo apenas as strings que têm mais de 3 caracteres.
    function novovetor(){
    let nomes = ["Maria","Zé","Rafael","Livia","Ana"]
    let novo = []
        for(let i=0;i<nomes.length;i++){
            if(nomes[i].length > 3){
                novo.push(nomes[i])
            }
    }
    return novo
}
let resultado = novovetor()
console.log(resultado)
    