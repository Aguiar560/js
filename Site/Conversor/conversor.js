
function converter(){
    let res = document.getElementById('res')
    let temp = 0

    let numero = Number(document.getElementById('numero').value)
        if(numero ===''){
            alert('Insira valor válido')
        }else{
    temp = (numero*(9/5)+32)
    res.innerHTML=` <strong><span style="background-color: rgb(176, 200, 250)">${numero}ºC</span></strong> = <strong><span style="background-color: rgb(176, 200, 250)">${temp}ºF</span></strong>`   
    document.getElementById('numero').value =``
    }   
}
function metrar(){
    let res = document.getElementById('result')
    let metros = 0
    let numero = Number(document.getElementById('medida').value)
        if(numero ==='' || numero <=0){
            alert('Insira valor válido')
        }else{
    metros = (numero/3.6)
    res.innerHTML=` <strong><span style="background-color: rgb(176, 200, 250)">${numero}km/h</span></strong> = <strong><span style="background-color: rgb(176, 200, 250)">${metros.toFixed(2)}m/s</span></strong>`   
    document.getElementById('medida').value =``
    }   
}
