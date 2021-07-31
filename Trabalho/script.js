function teste() {
  let name = document.getElementById('name');
  let telefone = document.getElementById('telefone');
  let dataChegada = document.getElementById('chegada');
  let dataSaida = document.getElementById('saida');
  let quarto = document.getElementById('quarto');
  let kids = document.getElementById('kids');

  if (quarto.value === 'Single') {
    if (kids.value <= 3) {
      let valorCrianca = kids.value * 30;
      let subTotal = 139 + valorCrianca;

      let result = tempoTranscorrido(dataChegada.value, dataSaida.value);
      let conversao = new Date(result);
      let dia = conversao.getDay() - 3;

      alert(`O valor é ${subTotal * dia}`);
    } else {
      alert('Limite ultrapassado!! Maximo de 4 pessoas por quarto!');
    }

    return true;
  }

  if (quarto.value === 'Double') {
    if (kids.value <= 2) {
      let valorCrianca = kids.value * 30;
      let subTotal = 220 + valorCrianca;
      let result = tempoTranscorrido(dataChegada.value, dataSaida.value);
      let conversao = new Date(result);
      let dia = conversao.getDay() - 3;

      alert(`O valor é ${subTotal * dia}`);
    } else {
      alert('Limite ultrapassado!! Maximo de 4 pessoas por quarto!');
    }
  }

  if (quarto.value === 'Triplo') {
    if (kids.value <= 1) {
      let valorCrianca = kids.value * 30;
      let subTotal = 340 + valorCrianca;
      let result = tempoTranscorrido(dataChegada.value, dataSaida.value);
      let conversao = new Date(result);
      let dia = conversao.getDay() - 3;

      alert(`O valor é ${subTotal * dia}`);
    } else {
      alert('Limite ultrapassado!! Maximo de 4 pessoas por quarto!');
    }
  }
}

function tempoTranscorrido(a, b) {
  let dataChegada = new Date(a);
  let dataSaida = new Date(b);
  let result = dataSaida.getTime() - dataChegada.getTime();

  return result;
}
