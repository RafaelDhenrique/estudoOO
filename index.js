import chalk from "chalk"
import {Aluno} from "./Aluno.js";
import {Notas} from "./Notas.js";

console.log("Estudo de Orientação a Objetos")

// let alunos = ["Guilherme","Rafael"];  


// let notas = [9,8];

// const reprovados = alunos.filter((_,indice) => notas[indice] < 5);

// const validaReprovados = reprovados.length !== 0 ? console.log(`Alunos reprovados:\n${reprovados}`) : console.log(`Nenhum aluno reprovado`);

const aluno1 = new Aluno("Rafael", 18);

const validaçãoDeAlunos = new Notas(3, "Rafael")
console.log(validaçãoDeAlunos)