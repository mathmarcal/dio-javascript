/*
    O IMC - Índice de Massa Corporal é um critério  de Organização Mundial de Saúde para dar uma indicação sobre
    a condição de peso de uma pessoa adulta.

    Formula IMC:
    IMC = peso / (altura * altura)
    
    Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adulto Condição: 
    - Abaixo de 18.5 -> Abaixo do peso;
    - Entre 18.5 e 25 -> Peso normal;
    - Entre 25 e 30 -> Acima do peso;
    - Entre 30 e 40 -> Obeso;
    - Acima de 40 -> Obesidade Grave;
*/

const peso = 120;
const altura = 1.88;

const imc = peso / (Math.pow(altura, 2)); /* -> altura * altura -> potencia */

if (imc < 18.5) {
    console.log('IMC -> ' + imc).toFixed(2);
    console.log('Abaixo do peso !');
} else if (imc >= 18.5 && imc < 25) {
    console.log('IMC -> ' + imc.toFixed(2));
    console.log('Peso Normal !');
} else if (imc >= 25 && imc < 30) {
    console.log('IMC -> ' + imc.toFixed(2));
    console.log('Acima do Peso !');
} else if (imc >= 30 && imc < 40) {
    console.log('IMC -> ' + imc.toFixed(2));
    console.log('Obeso');
} else {
    console.log('IMC -> ' + imc.toFixed(2));
    console.log('Obesidade Grave');
}