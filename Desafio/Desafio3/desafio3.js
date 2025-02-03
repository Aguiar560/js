let numero , novonumero
const res = document.getElementById('res')
const verifica = document.getElementById('verifica')
    verifica.addEventListener('mouseenter',entrar)
    verifica.addEventListener('mouseout', sair)

function sair(){
    verifica.style.backgroundColor=''
}


function entrar(){
    verifica.style.backgroundColor = 'green'
}


function ChecarNumero(mensagem){
    let valor
    do {valor = Number(prompt(mensagem).replace(',','.'))
        if(valor <=0 || isNaN(valor)){
        alert('Insira valor Correto!!!')
        }
    }while (valor <=0 || isNaN(valor))
        return valor
}


function verificar(){
    let valor,diferenca,porce,direcao,conta,corConta
    numero = ChecarNumero('Qual era o preço antes do produto?')   
    novonumero = ChecarNumero('Qual é o preço atual do produto?')
            if(novonumero > numero){
                valor = 'caro'
                diferenca = '<span style="color:green;font-weight: bold">subiu</span>'
                conta = novonumero - numero
                direcao = 'cima'
                corConta = "green"
            }else{
                valor = 'barato'
                diferenca = '<span style="color:red;font-weight: bold">caiu</span>'
                conta = numero - novonumero
                direcao = 'baixo'
                corConta= "red"
            }
    porce = ((conta/numero)*100).toFixed(2)
    let numeroFormatado = numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let novonumeroFormatado = novonumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let contaFormatada = `<span style="color:${corConta}; font-weight: bold">${conta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>`;
    res.innerHTML=`<h1>Analisando os valores informados</h1><p>O produto custava ${numeroFormatado} e agora custa ${novonumeroFormatado}.</p><p>Hoje o produto está mais ${valor}.</p>`
    res.innerHTML+=`<p>O preço ${diferenca} ${contaFormatada} em relação ao preço anterior.</p>`
    res.innerHTML+=`<p>Uma variação de ${porce}% para ${direcao}.</p>`
}

