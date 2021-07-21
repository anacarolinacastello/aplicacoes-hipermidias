let word = prompt('Digite uma palavra:');
let auxWord = '';

for (let i = word.length - 1; i >= 0; i--) {
  auxWord += word[i];
}

if (word === auxWord) {
  alert('É um Palíndromo');
} else {
  alert('Não é um Palíndromo!');
}
