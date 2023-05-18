// O programa deve ler um número que corresponde à quantidade de símbolos que devem ser preenchidos (Em um cheque ou boleto bancário, por exemplo). O preenchimento deve intercalar os caracteres "*" e "-".

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumber.value)
    let estrelas = "";
    for (let i = 0; i <= numero; i++) {
        if(i%2 == 1) {
            estrelas = estrelas + "*"
        } else {
            estrelas = estrelas + "-"
        }
    }

    resp.innerHTML = `${estrelas}`
})