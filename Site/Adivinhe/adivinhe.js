    let min = 1
    let max = 10000
    const pergunta = Math.floor(Math.random()* 10000)+1

    let tentativas = 0
    let numero 
    const adivinhe = true
                
        while(adivinhe){
            numero = Number(prompt(`Adivinhe o número que estou pensando entre ${min} e ${max}`))
                if(isNaN(numero) || numero < min || numero > max){
                    alert('Insira um Número Válido')
                }else{
                    tentativas++ 
                    if(numero < pergunta){
                    alert(`Número mais alto`)
                    min = numero 
                    }else if(numero > pergunta){  
                        alert(`Número mais baixo`)
                    max = numero   
                    }
                    if(numero == pergunta){
                    alert(`Parabéns o número era ${pergunta} e você tentou ${tentativas} vezes`)
                    adivinhe = false
                     }
            }       
     }
        