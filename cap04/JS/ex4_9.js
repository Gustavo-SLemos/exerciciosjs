/* Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e o troco (se existir). Se o valor for inferior ao tempo mínimo, exiba a mensagem: "Valor Insuficiente". Considerar os valores/tempos 1,00 - 30 min; 1,75 - 60 min; 3,00 - 120 min. */

const frm = document.querySelector("form");
const resp1 = document.querySelector("#tempo");
const resp2 = document.querySelector("#troco");
const resp3 = document.querySelector("#saldoinsuficiente");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(frm.valorDepositado.value);

    if (valor < 1) {
        resp3.innerText = "Valor Insuficiente";
    } else if (valor >= 1 && valor < 1.75) {
        resp1.innerText = "Tempo: 30 min";
        resp2.innerText = `Troco R$: ${(valor - 1).toFixed(2)}`;
    } else if (valor >= 1.75 && valor < 3) {
        resp1.innerText = "Tempo: 60 min";
        resp2.innerText = `Troco R$: ${(valor - 1.75).toFixed(2)}`;
    } else {
        resp1.innerText = "Tempo: 120 min";
        resp2.innerText = `Troco R$: ${(valor - 3).toFixed(2)}`;
    }
});