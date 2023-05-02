const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
e.preventDefault();
const vc = Number(frm.velocidadeCondutor.value);
const vp = Number(frm.velocidadePermitida.value);

if (vc <= vp){
    resp1.innerText = "Situação: Sem Multa"
} else if (vc > vp && vc <= (vp + (vp * 0.2))) {
    resp1.innerText = "Situação: Multa Leve"
} else {
    resp1.innerText = "Situação: Multa Grave"
}

});