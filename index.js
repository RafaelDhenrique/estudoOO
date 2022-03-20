import chalk from "chalk"
import {Aluno} from "./Aluno.js";
import {Notas} from "./Notas.js";

console.log("Estudo de Orientação a Objetos")

const aluno1 = new Aluno("Rafael", 18);

//Teste

const validaçãoDeAlunos = new Notas(3, "Rafael")
console.log(validaçãoDeAlunos)
