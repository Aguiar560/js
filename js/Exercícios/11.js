//document.getElementById("formulário").addEventListener("submit", function() {
 function enviar(){
   

let nome = document.getElementById('nome').value
let idade = document.getElementById('idade').value
let dados = {
    nome: nome,
    idade: idade
}

let json = document.getElementById('jsonDisplay')
 json.textContent = JSON.stringify(dados,null,2)
}