const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const valor = Number(frm.inNumero.value);
    const resultado = Math.sqrt(valor);

    if (Number.isInteger(resultado)){
        resp.innerText = `A raiz quadrada de ${valor} é: ${resultado}`
    }
    else {
        resp.innerText = `Não há raiz quadrada para ${valor}`
    }
})