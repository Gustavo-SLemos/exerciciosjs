// Programa Java Script que converte a duração de um filme

// Cria referência ao form e aos elementos h3 e h4
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value // obtém conteúdo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) // arredonda para baixo o resultado
    const minutos = duracao % 60 // obtém o resto da divisão

    resp1.innerText = titulo // exibe respostas
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

    e.preventDefault() //evita envio do form
})