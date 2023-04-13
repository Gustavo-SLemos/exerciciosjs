// Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final.

const prompt = require("prompt-sync")()
const salario = Number(prompt("Salário: "))
const tempoNaEmpresa = Number(prompt("Tempo de empresa: "))

const quadrienio = Math.trunc(tempoNaEmpresa / 4)
const salarioFinal = Number(salario + (salario * (quadrienio * 0.01)))

console.log(`O funcionário tem direito a ${quadrienio} quadriênios`)
console.log(`O seu salário atual é de R$ ${salarioFinal}`)