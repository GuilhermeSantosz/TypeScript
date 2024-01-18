"use strict";
const alunos = [
    {
        nome: 'Carlos',
        cursos: ['front-end', 'ux-ui'],
        idade: 27,
    },
    {
        nome: 'Ana',
        cursos: ['front-end', 'phyton'],
        idade: 23,
    },
];
alunos.push({
    nome: 'Julia',
    cursos: ['arquitetura'],
    idade: 26,
});
const novoAluno = {
    nome: 'lucas',
    idade: 19,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
