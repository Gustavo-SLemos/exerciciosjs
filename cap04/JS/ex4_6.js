const frm = document.querySelector("form");
const resp1 = document.getElementById("nota100");
const resp2 = document.getElementById("nota50");
const resp3 = document.getElementById("nota10");

frm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const saque = Number(frm.valorSaque.value)
    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
    frm.valorSaque.focus()
    return
}
const notaCem = Math.floor(saque / 100) //calcula as notas de 100
let resto = saque % 100 //quanto sobra para pagar
const notaCinquenta = Math.floor(resto /50) //calcula as notas de 50
resto = resto % 50 //quanto ainda sobra
const notaDez = Math.floor(resto / 10) //calcula as notas de 10
if (notaCem > 0) {
    resp1.innerText = `Notas de R$100: ${notaCem}`
}
if (notaCinquenta > 0) {
    resp2.innerText = `Notas de R$50: ${notaCinquenta}`
}
if (notaDez > 0) {
    resp3.innerText = `Notas de R$10: ${notaDez}`
}
});