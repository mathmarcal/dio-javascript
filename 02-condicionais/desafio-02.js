/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1 - Preço etanol;
    2 - Preço gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM de viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 3.58;
const precoGasolina = 5.39;
const gastoMedio = 10;
const distanciaKm = 110;
const tipoCombustivel = 'Gasolina';

if (tipoCombustivel === 'Etanol') {
    gastoViagem = precoEtanol * distanciaKm / gastoMedio
    console.log(gastoViagem.toFixed(2))
} else {
    gastoViagem = precoGasolina * distanciaKm / gastoMedio
    console.log(gastoViagem.toFixed(2))
}