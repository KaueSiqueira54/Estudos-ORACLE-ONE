alert("Bem vindo(a) ao jogo do número secreto!");
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let numeroDigitado;
let tentativas = 1;

while (numeroDigitado != numeroSecreto) {
  numeroDigitado = prompt(`Escolha um número entre 1 e ${numeroMaximo}\n`);

  if (numeroDigitado == numeroSecreto) {
    break;
  } else {
    if (numeroDigitado > numeroSecreto) {
      alert(`O número secreto é menor que ${numeroDigitado}`);
    } else {
      alert(`O número secreto é maior que ${numeroDigitado}`);
    }
  }
  tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(
  `Parabéns! Você descobriu o número secreto! O número era: ${numeroSecreto}.\n Você descobriu em ${tentativas} ${palavraTentativa}.`
);
