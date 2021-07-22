let num = prompt('Digite um número:');

function parOuImpar(entrada) {
  if (num % 2 === 0) {
    return alert(`${num} é par!`);
  } else {
    return alert(`${num} ímpar`);
  }
}

parOuImpar(num);
