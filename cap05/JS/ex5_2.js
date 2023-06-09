// O programa deve ler um número e fazer ele decrescer até o número 1.

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inNumber.value);
  let resposta = `Entre ${valor} e 1: `;
  for (let i = valor; i > 1; i--) {
    resposta = resposta + i + ", ";
  }
  resposta = resposta + "1.";

  resp.innerText = resposta;
});
