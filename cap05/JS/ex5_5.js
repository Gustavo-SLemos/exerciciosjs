/* O programa faz a leitura de contas que devem ser pagas por um usuário. As contas são exibidas e no final da lsitagem o número de contas (contador) e a soma dos valores (acumulador) são destacados. */

const frm = document.querySelector("form");
const resp1 = document.querySelector("pre");
const resp2 = document.querySelector("h3");

let resposta = ""
let numContas = 0
let valTotal = 0


frm.addEventListener("submit", (e) => {
    e.preventDefault();

const textoConta = frm.descricaoConta.value
const preco = Number(frm.valorConta.value)

numContas++;
valTotal = valTotal + preco
resposta = resposta + textoConta + " - R$: " + preco.toFixed(2) + "\n"

    resp1.innerText = `${resposta} ----------------------------------------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.descricaoConta.value = "" //limpa o campo
    frm.valorConta.value = ""
    frm.descricaoConta.focus()
})
