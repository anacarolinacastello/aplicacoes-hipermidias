let word = prompt('Digite uma palavra:');
let auxWord = '';

function palindromo(entrada) {
  for (let i = word.length - 1; i >= 0; i--) {
    auxWord += word[i];
  }
  if (word === auxWord) {
    return alert('É um Palíndromo');
  } else {
    return alert('Não é um Palíndromo!');
  }
}

palindromo(word);
