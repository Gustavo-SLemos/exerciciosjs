/* Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes).*/

const frm = document.querySelector('form');
const resp1 = document.querySelector('#resposta1');
const resp2 = document.querySelector('#resposta2');
console.log(frm, resp1, resp2);

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const ladoA = Number(frm.ladoa.value);
    const ladoB = Number(frm.ladob.value);
    const ladoC = Number(frm.ladoc.value);

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoB + ladoA) {
        resp1.innerText = "Não é possível formar um triângulo com os valores digitados.";
    } else { 
        resp1.innerText = "Lados podem formar um triângulo"
        if (ladoA == ladoB && ladoA == ladoC) {
          resp2.innerText = "Tipo: Equilátero"
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
          resp2.innerText = "Tipo: Isósceles"
        } else {
          resp2.innerText = "Tipo: Escaleno"
        }
      }

});