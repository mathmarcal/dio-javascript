

function aplicarDesconto_Juros(valorProduto, desconto) {
    if (formaDePagamento > 2) {
        return (valorProduto + (valorProduto * (desconto / 100)));
    } else {
        return (valorProduto - (valorProduto * (desconto / 100)));
    }
}


function valorFinal() {
    if (formaDePagamento === 'Débito') {
        valorFinal = aplicarDesconto_Juros(valorProduto, 10);
        console.log('Valor do seu produto com descontos: R$ ' + valorFinal.toFixed(2));
    } else if (formaDePagamento === 'Dinheiro' || formaDePagamento === 'Pix') {
        valorFinal = aplicarDesconto_Juros(valorProduto, 15);
        console.log('Valor do produto mais descontos: R$ ' + valorFinal.toFixed(2));
    } else if (formaDePagamento <= 2) {
        console.log('Valor Final do produto: R$ ' + valorProduto);
    } else {
        valorFinal = aplicarDesconto_Juros(valorProduto, 10);
        console.log('Valor Final do produto mais acrescimos: R$ ' + valorFinal.toFixed(2));
    }
}

const valorProduto = 100;
const formaDePagamento = 'Débito';
valorFinal();