// O programa deve ler um número e apresentar a tabuada desse número utilizando o comando "for" para o laço de repetição.

const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = Number(frm.numero.value);
  let resposta = "";
  for (let i = 1; i <= 10; i++) {
    resposta = `${resposta}${numero} X ${i} = ${numero * i}\n`;
  }

  resp.innerText = resposta;
});
