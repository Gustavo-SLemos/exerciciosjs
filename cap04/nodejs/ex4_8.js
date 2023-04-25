// Uma fármacia necessita de um programa que leia o total de uma compra. Exiba como resposta o número máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condições: 1- cada parcela deve ser de, no mínimo, R$ 20,00; 2- o número máximo de parcelas permitido é 6.

const prompt = require("prompt-sync")();
const valorCompra = Number(prompt("Qual o valor da compra? "));
let parcelas = Math.floor(valorCompra / 20)
let valor = valorCompra / parcelas
if (valorCompra <= 39.99) {
    console.log(`O valor não pode ser parcelado`)
}
else{
    console.log(`O valor pode ser parcelado em até ${parcelas} de R$${valor.toFixed(2)}`)
}