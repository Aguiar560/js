function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.toTimeString()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12){
        //Bom Dia!
        img.src = 'Manha.png'
        document.body.style.backgroundColor = '#e3e1cf'
    }else if (hora >=12 && hora <=18){
        //Boa Tarde
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#e0884a'
    }else{
        //Boa Noite
        img.src = 'Noite.png'  
        document.body.style.backgroundColor = '#1c1c1cb9'
    }
}
