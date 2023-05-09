/* O programa realiza a leitura de um número e, caso o número for par ele exibe o dobro do número e se for ímpar, o triplo. A leitura continua até que o usuário informe 0 (ou algum valor inválido).
Inicialmente, uma mensagem alertando sobre a execução do programa é apresentada. */

alert("Programa Laços de Repetição em funcionamento!");
do{
let numero = Number(prompt("Digite um número: "));
if (numero == 0 || isNaN(numero)) {
    const sair = confirm("Confirma saída?")
    if (sair) {
        break;
    } else {
        continue;
    }
}

if (numero % 2 == 0) {
  alert(`O dobro de ${numero} é ${numero * 2}`);
} else {
    alert(`O triplo de ${numero} é ${numero * 3}`);
}
} while (true)
alert("Bye bye");