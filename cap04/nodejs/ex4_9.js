// Elaborar um programa que leia um número - que deve ser uma centena. Calcule e exiba a centena invertida. Caso o número não seja uma centena, exiba mensagem.

const prompt = require("prompt-sync")();
const centena = Number(prompt("Digite um valor que seja centena: "));

if (centena < 100 || centena >= 1000) {
    console.log("Número não é centena. Tente novamente!");
    return
}
const num1 = Math.floor(centena / 100);
const sobra = centena % 100;
const num2 = Math.floor(sobra / 10);
const num3 = sobra % 10

console.log(`Invertido: ${num3}${num2}${num1}`)