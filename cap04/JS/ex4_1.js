// Cria referência ao form e elementos de resposta do programa

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// Cria um ouvinte de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.nomeAluno.value
    const nota1 = Number(frm.nota1.value)
    const nota2 = Number(frm.nota2.value)
    const media = (nota1 + nota2) /2
    resp1.innerText = `Média das notas ${media.toFixed(2)}`

    // Cria as condições
    if (media >=7) {
        // altera o texto e estilo da cor do elemento resp2
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = "blue"
    } else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`
        resp2.style.color = "red"
    }
});