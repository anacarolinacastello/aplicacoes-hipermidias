let text = document.getElementById('text');
let result = document.getElementById('result');

text.addEventListener('keyup', function () {
  result.innerText = this.value;
});
