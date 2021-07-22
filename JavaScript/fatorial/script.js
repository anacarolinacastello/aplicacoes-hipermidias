let num = prompt('Digite um número:');
let valor;

function fatorial(entrada) {
  for (let i = 1; i <= entrada; i++) {
    if (i == 1) {
      valor = 1;
    }
    valor *= i;
  }
  return alert(`O fatorial de ${num} é ${valor}.`);
}
fatorial(num);
