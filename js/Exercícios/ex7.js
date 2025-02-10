let div = document.getElementById('contador')
 
function aumentar(){
    let num = Number(div.innerHTML)
    num ++
    div.innerHTML = `${num}`
}

function diminuir(){
    let num = Number(div.innerHTML)
    num --
    div.innerHTML = `${num}`
}


function resetar(){
    div.innerHTML = `0`
}