let itens = []
function adicionar(){
    let inputitem = document.getElementById('item')
    let item = inputitem.value.trim()
        if(item == ''){
           item = prompt("Digite um item válido")
           if(!item) return // se o prompt for cancelado ou vazio retorna sem adicionar
        }
    document.getElementById('mensagem').textContent= 'Adicionado Com Sucesso!!'
    itens.push(item)
    renderizarITEM()
    inputitem.value ='' //limpar o imput depois que add o item
    inputitem.focus()
    }
    

function renderizarITEM(){
    let itensadd = document.getElementById('itensADD')
        itensadd.innerHTML=''
        for(let i = 0; i< itens.length ;i++){
    let itemadicionado = document.createElement("li") // adicionar item a lista
       itemadicionado.textContent = itens[i]//cria o texto do novo item da lista
       
    let remover = document.createElement('button')
        remover.className= 'remover'
        remover.textContent = 'Remover'
        remover.onclick = () => removeritem(i)
    let editar = document.createElement('button')
        editar.className= 'editar'
        editar.onclick = () => editaritem(i) 
        editar.textContent= 'Editar'

        
        itemadicionado.appendChild(remover)
        itemadicionado.appendChild(editar)
        
        itensadd.appendChild(itemadicionado) //adiciona o item(itemadicionado) na lista(itensadd) 
    }
}

function removeritem(i){
     itens.splice(i,1)
     renderizarITEM()
}

function editaritem(i){
    let editado = prompt("Novo item")
        if (editado.trim() !==''){
            itens[i] = editado
        renderizarITEM()
      
    }  
 }   

