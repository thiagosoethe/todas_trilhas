var cor = require("cli-color");

console.log(cor.green("Mensagem verde"));
console.log(cor.red("Mensagem vermelha"));
console.log(cor.blue("Mensagem azul"));
console.log(cor.yellow("Mensagem amarela"));

console.log(cor.red.bold("Erro"));
console.log(cor.yellow("Aviso"));
console.log(cor.cyan("Informação"));

console.table([
    {
        Nome: "Thiago",
        Curso: "NodeJS",
        Atividade: "OT3"
    },
    {
        Nome: "Aluno",
        Curso: "JavaScript",
        Atividade: "Console"
    }
]);
