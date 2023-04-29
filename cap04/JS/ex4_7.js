
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num1 = Number(frm.numero.value);
    

    // if e else

    /*if(num1 %2 === 0) {resp1.innerText = (`O número ${num1} é par.`)
    } else {
        resp1.innerText = (`O número ${num1} é ímpar.`)
    }*/

    // operador ternário
    
    const resultado = (num1 %2 ===0 ? resp1.innerText = `O número ${num1} é par.` : resp1.innerText = `O número ${num1} é ímpar.`)
});
