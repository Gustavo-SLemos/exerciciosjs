// cria referência ao form e ao elemento h3 (onde será exibida a resposta)

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const med = (frm.inMed.value);
    const preco = Number(frm.inPreco.value);

    const promocao = Math.floor(preco * 2)

    resp1.innerText = `Promoção de ${med}`;
    resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`;
    e.preventDefault();
})