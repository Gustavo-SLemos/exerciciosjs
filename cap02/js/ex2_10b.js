// cria referência ao form e ao elemento h3 (onde será exibida a resposta)

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    const valorTempo = Number(frm.inValor.value);
    const tempoCliente = Number(frm.inTempo.value);

    const valorTotal = Math.ceil(tempoCliente / 15) * valorTempo;

    resp.innerText = `Valor a Pagar R$: ${valorTotal.toFixed(2)}`


    e.preventDefault();

});