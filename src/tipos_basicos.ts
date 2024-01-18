let estaChovendo: boolean = false;

estaChovendo = true;

let idade: number = 28;

let altura: number = 1.75;

const nacionalidade: string = "brasileira";

const colegas: string[] = ["gabi", "bruno"];
const tecnologias: Array<string> = ["html", "css", "js"];
const notas: ReadonlyArray<number> = [7, 8, 9, 5];

// notas.push() não tem no ReadOnly

const lista: [nome: string, estaJogando: boolean, idade: number] = [
  "guilherme",
  false,
  22,
];

let idadeDaAna: number | string = 22;
idadeDaAna = "vinte e cinco";

let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = "string";

let curso = 'front-end';