

function escrevaNome(name) {
    return ('Meu nome é: ' + name);
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaNome('Matheus') + ' -> Maior de Idade');
    } else {
        console.log(escrevaNome('Matheus') + ' -> Menor de Idade');
    }
}

// MAIN ...
(function () {
    console.log(escrevaNome('Matheus'));
    verificarIdade(25);
})();
