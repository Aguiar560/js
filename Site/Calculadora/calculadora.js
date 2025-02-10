let display = document.getElementById('display')
function adicionar(input){
    display.value += input
}

function calcular(){                            
    try{                                              
        display.value = eval(display.value)              //codigo que pode haver erro
    }catch(error){
         display.value = "Error"                        //caso haja erro executa essa linha
    }
}
function limpar(){
    display.value = ''

}