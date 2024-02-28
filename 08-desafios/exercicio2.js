/*
    2- Faça um programa que receba N (quatidade de números) e seus respecticos valores.
    Imprima o maior par e o menor ímpar.

            Exemplo:
                Entrada:
                    5
                    3
                    4
                    1
                    10
                    8
                Saída:
                    Maior Número Par: 10
                    Menor Número Ímpar: 1
*/

const { gets, print } = require('./funcoes-auxiliares-ex2');

const numero = gets();
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < numero; i++) {
    const numerosEntrada = gets();

    if (numerosEntrada % 2 === 0) {
        if (maiorPar === null || numerosEntrada > maiorPar) {
            maiorPar = numerosEntrada;
        }
    } else {
        if (menorImpar === null || numerosEntrada < menorImpar) {
            menorImpar = numerosEntrada;
        }
    }
}



print('Maior Numero Par -> ' + maiorPar);
print('Menor Número Ímpar -> ' + menorImpar);