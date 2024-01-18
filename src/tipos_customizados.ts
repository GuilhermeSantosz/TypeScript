type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
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

const novoAluno: aluno = {
    nome: 'lucas',
    idade: 19,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}