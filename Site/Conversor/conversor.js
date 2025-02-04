
function converter(){
    let res = document.getElementById('res')
    //let temp = 0
    let celsius = document.getElementById('cels')
    let far = document.getElementById('far')

    let numero = Number(document.getElementById('numero').value)
        if(numero ===''){
            alert('Insira valor válido')
        }else if(celsius.checked){
            temp = (numero*(9/5)+32)
            res.innerHTML=` <strong><span style="background-color: rgb(176, 200, 250)">${numero}ºC</span></strong> = <strong><span style="background-color: rgb(176, 200, 250)">${temp.toFixed(2)}ºF</span></strong>`
        }else if(far.checked){
            temp = (numero -32)*(5/9)
            res.innerHTML=` <strong><span style="background-color: rgb(176, 200, 250)">${numero}ºF</span></strong> = <strong><span style="background-color: rgb(176, 200, 250)">${temp.toFixed(2)}ºC</span></strong>`
        }
        document.getElementById('numero').value =``
    }     
        
       /* let tempCel = celsius.checked ? 'ºC': 'ºF'
        let tempF = celsius.checked ? 'ºF' : 'ºC'
        let temp = celsius.checked ? numero*(9/5)+32 : (numero -32)*5/9
        res.innerHTML = `<strong><span style="background-color: rgb(176, 200, 250)">${numero} ${tempCel}</span></strong> = <strong><span style="background-color: rgb(176, 200, 250)">${temp.toFixed(2)} ${tempF}</span></strong>*/
          
function metrar(){
    let res = document.getElementById('result')
    let vel = 0
    let km = document.getElementById('km')
    let met = document.getElementById('met')
    let numero = Number(document.getElementById('medida').value)
        if(numero ==='' || numero <=0){
            alert('Insira valor válido')
        }else if(km.checked){
            vel = (numero/3.6)
            res.innerHTML=` <strong><span style="background-color: rgb(176, 200, 250)">${numero}km/h</span></strong> = <strong><span style="background-color: rgb(176, 200, 250)">${vel.toFixed(2)}m/s</span></strong>` 
        }else if(met.checked){
            vel = (numero*3.6)
            res.innerHTML=` <strong><span style="background-color: rgb(176, 200, 250)">${numero}m/s</span></strong> = <strong><span style="background-color: rgb(176, 200, 250)">${vel}Km/h</span></strong>`  
         }
         document.getElementById('medida').value =``
    }
      
    //Otimizado
    /*let unidadeOrigem = km.checked ? "km/h" : "m/s";
    let unidadeDestino = km.checked ? "m/s" : "km/h";
    let vel = km.checked ? (numero / 3.6) : (numero * 3.6);
    res.innerHTML = `<strong><span style="background-color: rgb(176, 200, 250)">${numero} ${unidadeOrigem}</span></strong> = <strong><span style="background-color: rgb(176, 200, 250)">${vel.toFixed(2)} ${unidadeDestino}</span></strong>`*/