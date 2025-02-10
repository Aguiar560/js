function somar(){
    let somar = document.getElementById('somar')
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let soma = n1 + n2
    somar.innerHTML= `<strong>${soma}</strong>`
}