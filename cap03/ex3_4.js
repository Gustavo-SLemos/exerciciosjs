// Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas).

const prompt = require("prompt-sync")();
const pesoDaRacao = Number(prompt("Peso da Ração em kg: "));
const consumoDiario = Number(prompt("Consumo diário em gramas: "));

const kgEmGr = Number(pesoDaRacao * 1000);
const dias = Number(kgEmGr / consumoDiario);
const sobra = kgEmGr % consumoDiario;

console.log(`Duração: ${dias}`);
console.log(`Sobra: ${sobra}`);