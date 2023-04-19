const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const hora = Number(frm.inTime.value);

    let horaFranca = hora + 5;
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24
    }

    resp.innerText = `A hora na França é ${horaFranca.toFixed(2)}`   
})