const prompt = require("prompt-sync")();

let saldo = Number(prompt("Quanto de saldo tem na conta?: "));
let valor = Number(prompt("Qual o valor do pix?: "));

if (saldo >= valor) {
    saldo = saldo - valor
    console.log("Pix enviado!, saldo: ", saldo)
} else {
    console.log("Pix bloqueado!, Motivo: Saldo Insuficiente");
}