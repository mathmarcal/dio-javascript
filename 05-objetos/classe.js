

class Info {
    nome;
    idade;
    dataNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = 2024 - idade;
    }

    descrever() {
        console.log('Nome: ' + this.nome + ' - Idade: ' + this.idade + ' - Data de Nascimento: ' + this.dataNascimento);
    }
}

const matheus = new Info('Matheus', 25);
const isabella = new Info('Isabella', 25)
// matheus.descrever();
// isabella.descrever();

console.log('--------------------------------------------')


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(p1.nome + ' é a pessoa é mais velha');
    } else if (p1.idade < p2.idade) {
        console.log(p2.nome + ' é a pessoa é mais velha');
    } else {
        console.log(p1.nome + ' tem a mesma idade de ' + p2.nome)
    }
}

compararPessoas(matheus, isabella);