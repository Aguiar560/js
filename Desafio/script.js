function validarnota(mensagem){
    let nota = Number(prompt(mensagem))
        while(nota>10 || nota<0){
            nota = Number(prompt(mensagem))
        }
        return nota

}
function notas(){
    let res = document.getElementById('res')
    let res2 = document.getElementById('res2')
    let nome =prompt("Qual seu nome?")
    let nota1=validarnota(`Primeira nota de ${nome}`)
    let nota2=validarnota(`Segunda nota de ${nome}`)
    let media =(nota1 + nota2)/2
        res.innerHTML=`<p style="font: bold 25pt Arial"> Analisando a situação de ${nome}</p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}.</strong>`
        if(media>6){
            res2.innerHTML=`<p>Com a média acima de 6.0, o aluno esta <strong style="background-color:rgb(102, 241, 60)">APROVADO.</strong></p>`
        }else if(media<=6 && media>3){
            res2.innerHTML=`<p>Com a média entre 3.0 e 6.0, o aluno esta <strong style="color: orange">RECUPERAÇÃO.</strong></p>`
        }else{
            res2.innerHTML=`<p>Com a média abaixo de 3.0, o aluno esta <strong style="background-color: #ec6c4f ">REPROVADO.</strong></p>`
        }
}
function novo(){
    let res = document.getElementById('res')
    let res2 = document.getElementById('res2')
        res.innerHTML=`<p>Clique no botão acima para informar as notas do aluno.</p>`
        res2.innerHTML=``
}
