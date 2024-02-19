/*
    Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprime a sua
    média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 10;
const nota2 = 10;
const nota3 = 7;

const mediaFinal = (nota1 + nota2 + nota3) / 3;

if (mediaFinal < 5) {
    console.log('Reprovado');
    console.log('Média: ' + mediaFinal.toFixed(2));
}else if (mediaFinal >= 5 && mediaFinal < 7) {
    console.log('Recuperação');
    console.log('Média: ' + mediaFinal.toFixed(2));
}else{
    console.log('Aprovado');
    console.log('Média: ' + mediaFinal.toFixed(2));
}
