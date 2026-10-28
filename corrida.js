// const tarifaBase = 5;
// const precoPorMinuto = 0.5;
// const precoPorKm = 2;

// let km = 15;
// let minutos = 20;

// let total = tarifaBase + km * precoPorKm + minutos * precoPorMinuto
// console.log("R$: ", total.toFixed(2))
// console.log(typeof tarifaBase)

const prompt = require("prompt-sync")()

const tarifaBase = Number(prompt("qual a tarifa base: "));
const precoPorMinuto = 0.5;
const precoPorKm = 2;

let km = 15;
let minutos = 20;

let total = tarifaBase + km * precoPorKm + minutos * precoPorMinuto
console.log("R$: ", total.toFixed(2))