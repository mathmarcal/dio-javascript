


const dados = {
    nome: 'Matheus P Marçal',
    idade: 25,
    dataNascimento: '15 / 09 / 1999',

    info: function () {
        console.log('Meu nome é ' + this.nome + ' Minha idade é ' + this.idade + ' Minha data de nascimento é ' + this.dataNascimento + 
        ' Sexo: ' + this.sexo);
    }
};

dados.sexo = 'Masculino';


//dados.info();

console.log(dados['nome']);

