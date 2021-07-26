function validar() {
  let email = document.getElementById('email').value;
  let regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)?$/;

  if (regex.test(email)) {
    return alert('E-mail válido!');
  } else {
    return alert('E-mail inválido!');
  }
}
