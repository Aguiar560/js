function adicionar(){
    let texto = document.getElementById('texto')
    let textoo = texto.value.trim()
      
    let text = document.createElement('li')
         text.textContent =  textoo
     document.getElementById('lista').appendChild(text)  
     texto.value = ''
     texto.focus()
 }

 function embaralhar(){
    let lista = document.getElementById('lista')
    let itens = Array.from(lista.children)

    for(let i = itens.length -1; i >0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [itens[i],itens[j]] = [itens[j],itens[i]];
    }
    lista.innerHTML = ""
    itens.forEach(item => lista.appendChild(item))
 }