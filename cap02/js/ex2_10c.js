

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");


frm.addEventListener("submit", (e) => {

    const produto = (frm.inProduto.value);
    const preco = Number(frm.inPreco.value);

    const valorPromo = Number((preco * 2) + (preco / 2))
    const terceiroProduto = preco / 2

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorPromo.toFixed(2)}`
    resp2.innerText = `O terceiro produto custa apenas R$: ${terceiroProduto.toFixed(2)}`

    e.preventDefault();
    });




    