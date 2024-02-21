/*
    1- Crie uma classe para representar carros.
    Os carros posssuem uma marca, uma cor e um gasto médio de combustivel por km rodado.
    Crie um método que dado a quantidade de km e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.
*/

class RepresentarCarros {
    marca;
    cor;
    gastoMédioCombustivel;


    constructor(marca, cor, gastoMédioCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMédioCombustivel = 1 / gastoMédioCombustivel;
    }


    valorViagem(distanciaKM, precoCombustivel) {
        return distanciaKM * this.gastoMédioCombustivel * precoCombustivel
    }
}

const corsa = new RepresentarCarros('Chevrolet', 'Vermelha', 10);
console.log('O carro: ' + corsa.marca + ' Cor: ' + corsa.cor + ' Foi gasto na viagem R$: ' + corsa.valorViagem(150, 4.90))

const uno = new RepresentarCarros('Fiat', 'Azul Escuro', 15);
console.log('O carro: ' + uno.marca + ' Cor: ' + uno.cor + ' Foi gasto na viagem R$: ' + uno.valorViagem(150, 4.90))

