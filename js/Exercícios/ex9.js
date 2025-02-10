function adicionar(){
   let texto = document.getElementById('texto')
   let textoo = texto.value
   let text = document.createElement('li')
        text.textContent = `${textoo}.`
    document.getElementById('lista').appendChild(text)  
    texto.value = ''
    texto.focus()
}