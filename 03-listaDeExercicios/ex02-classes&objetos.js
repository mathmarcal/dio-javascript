/*
    2- Crie uma classe para representar pessoas.
    Para cada pessoas teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso - (altura * altura));
    Instacie uma pessoas chamada José que tenha 70kg de peso e 1.75 de altura e peça ao José dizer o valor do seu IMC;

*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        this // é utilizado sempre que for usar as variaveis da propria classe
        return this.peso / (Math.pow(this.altura, 2));
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do peso !';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso Normal !';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do Peso !';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade Grave';
        }
    }


}

const jose = new Pessoas('José', 70, 1.75);
console.log(jose);
console.log(jose.nome + ' -> IMC: ' + jose.calcularImc().toFixed(2) + ' -> ' + jose.classificarImc());

const matheus = new Pessoas('Matheus', 100, 1.90);
console.log(matheus);
console.log(matheus.nome + ' -> IMC: ' + matheus.calcularImc().toFixed(2) + ' -> ' + matheus.classificarImc());