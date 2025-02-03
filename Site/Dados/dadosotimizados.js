function jogar() {
    let numeros = Number(document.getElementById('numeros').value);
    let numdados = document.getElementById('numdados');
    let numimg = document.getElementById('dadosimg');
    let res = document.getElementById('res');
    if (numeros <= 0 || isNaN(numeros)) {
        alert('Insira um valor CORRETO!!');
        return; 
    }
    let valores = [];
    let imagens = [];
    let contagem = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
    for (let i = 0; i < numeros; i++) {
        let valor = Math.floor(Math.random() * 6) + 1;
        valores.push(valor);
        imagens.push(`<img src="${valor}.png">`);
        contagem[valor]++; 
    }
    res.innerHTML = `Quantidade de Dados: ${numeros}.`;
    let resultadoHTML = '';
    for (let num in contagem) {
        if (contagem[num] > 0) {
            let plural = contagem[num] > 1 ? 'vezes' : 'vez';
            resultadoHTML += `<p>O número ${num} foi sorteado ${contagem[num]} ${plural}.</p>`;
        }
    }
    res.innerHTML += resultadoHTML;
    numdados.textContent = `Números Sorteados: ${valores.join(', ')}`;
    numimg.innerHTML = imagens.join('');
}