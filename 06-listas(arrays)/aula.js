


const aluno = ['Matheus','Isabella','João'];

aluno.push('Maria','Hugo');

aluno[1] = 'Guilherme';

console.log(aluno);

console.log('---------------------------------------')

const notas = [];

notas.push(7);
notas.push(5);
notas.push(4);
notas.push(10);
notas.push(4);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
}

console.log(soma / notas.length)




