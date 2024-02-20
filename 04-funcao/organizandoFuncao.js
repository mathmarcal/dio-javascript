

function calcularImc(pesoIMC, alturaIMC) {
    return pesoIMC / (Math.pow(alturaIMC, 2));
}

function classificacaoImc(imc) {
    if (imc < 18.5) {
        return 'IMC = ' + imc.toFixed(2) + ' -> Abaixo do Peso!';
    } else if (imc >= 18.5 && imc < 25) {
        return 'IMC = ' + imc.toFixed(2) + ' -> Peso Normal!';
    } else if (imc >= 25 && imc < 30) {
        return 'IMC = ' + imc.toFixed(2) + ' -> Acima do Peso!';
    } else if (imc >= 30 && imc < 40) {
        return 'IMC = ' + imc.toFixed(2) + ' -> Obeso';
    } else {
        return 'IMC = ' + imc.toFixed(2) + ' -> Obesidade Grave!';
    }
}


// MAIN
(function () {
    const peso = 100.6;
    const altura = 1.88;

    const imc = calcularImc(peso, altura); /* -> altura * altura -> potencia */
    console.log(calcularImc(peso, altura).toFixed(2));
    console.log(classificacaoImc(imc));
})();

