// cria referência ao form e ao elemento h3 (onde será exibida a resposta)

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inBuffet.value) // obtém conteúdo dos campos
    const consumo = Number(frm.inGrama.value)

    const valor = (quilo / 1000) * consumo // calcula valor a ser pago
    resp1.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` // exibe resposta

    e.preventDefault(); // evita envio do form
})