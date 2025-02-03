function checar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade<10){
              img.setAttribute('src','menino2.jpg') 
            }else if(idade<=18){
             img.setAttribute('src','jovem2.jpg')  
            }else if(idade<=65){
            img.setAttribute('src','homem2.jpg')
            }else{
            img.setAttribute('src','veio2.jpg')
            }
        }else{
            genero='Mulher'
            if(idade>0 && idade<10){
                img.setAttribute('src','menina2.jpg') 
              }else if(idade<=18){
                img.setAttribute('src','jovena2.jpg')
              }else if(idade<=65){
                img.setAttribute('src','mulehr2.jpg')
              }else{
                img.setAttribute('src','veia2.jpg')
              }
        }
        res.innerHTML=`Você é ${genero} com ${idade} anos`
        res.appendChild(img)
}
    
