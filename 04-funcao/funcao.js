


function teste() {
    console.log('teste');
}

teste();

console.log('------------------------------------------------------------')

function sayMyName(name) {
    console.log('My name is: ' + name);
}

sayMyName('Matheus');

console.log('------------------------------------------------------------')


function quadrado(valor) {
    return valor * valor;
}

const quadradoDoNumero = quadrado(20);
console.log(quadradoDoNumero)

console.log('------------------------------------------------------------')

const valorBase = 150;
const valorAltura = 20;

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

const areaTotal = areaTriangulo(valorBase, valorAltura);
console.log('Área do seu Triângulo: ' + areaTotal);

console.log('------------------------------------------------------------')

const valorProduto = 200;
const jurosCompra = 20;

function incrementarJuros(valorEtiqueta, juros) {
    valorFinalProduto = (juros / 100) * valorEtiqueta;
    return valorFinalProduto + valorEtiqueta;
}

console.log('Valor Final: R$ ' + incrementarJuros(valorProduto, jurosCompra));



