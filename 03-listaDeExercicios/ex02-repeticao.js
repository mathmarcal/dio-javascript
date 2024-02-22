/*
    2- Crie um programa que seja capaz de perceber uma lista de números e imprime cada número par encontrado;
*/

const numeros = [2, 4, 7, 99, 50];

for (let i = 0; i < numeros.length; i++) {
    const numberList = numeros[i];
    if (numberList % 2 === 0) {
        console.log(numeros[i] + ' -> Numero Par!');
    } else {
        console.log(numeros[i] + ' -> Numero Impar!');
    }
    
}
