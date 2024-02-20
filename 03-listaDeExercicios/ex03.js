/*
    Elabore um algortimo que calcule o que deve ser pago por um produto , considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
    Utilize os códigos de tabela para ler qual a condição de pagamento escolhida e efetuar o cálculo
    adequado.

    Código Condição de pagamento:
    - Á vista Débito, recebe 10% de desconto;
    - Á vista no Dinheiro ou Pix, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const valorProduto = 100;
const formaDePagamento = 'Pix';

if (formaDePagamento === 'Débito') {
    valorFinal = valorProduto - (valorProduto * (10 / 100));
    console.log('Valor do seu produto com descontos: R$ ' + valorFinal.toFixed(2));
} else if (formaDePagamento === 'Dinheiro' || formaDePagamento === 'Pix') {
    valorFinal = valorProduto - (valorProduto * (15 / 100));
    console.log('Valor do produto mais descontos: R$ ' + valorFinal.toFixed(2));
} else if (formaDePagamento <= 2) {
    console.log('Valor Final do produto: R$ ' + valorProduto);
} else {
    valorFinal = valorProduto + (valorProduto * (10 / 100));
    console.log('Valor Final do produto mais acrescimos: R$ ' + valorFinal.toFixed(2));
}
