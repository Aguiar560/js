function verificar(){
    let veri = document.getElementById('verificar')
    let num = document.getElementById('numero').value
        if(num ==0){
            alert('Digite número correto')
        }else{
    let res = num%2==0 ? "Par" : "Impar"
        alert(`${res}`)
    }
}