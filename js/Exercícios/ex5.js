function mudar(){
    let cor = '#' + Math.floor(Math.random()*16777215).toString(16)   //tostring(16) transforma em hexadecimal
    document.body.style.backgroundColor = cor


}