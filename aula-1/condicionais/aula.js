const numero = 0;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar)


/* Sinal de Negação "!" */
if (numero === 0) {
    console.log('O numero informado é Inválido')
} else if (numeroPar) {
    console.log('Este numero é Par')
}
if (!numeroPar){
    console.log('Este numero é Impar')
}
/* Este sinal "!" em frente a variavel significa a negação, ou seja, se a variavel for true sua negação será false */


/* Condições If e Else*/
if (numero === 0) {
    console.log('O numero informado é Inválido')
} else if (numeroPar) {
    console.log('Este numero é Par')
} else {
    console.log('Este numero é Impar')
}