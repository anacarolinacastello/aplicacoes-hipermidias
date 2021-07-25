let dataEntrada = new Date(2021, 06, 25);
let dataAtual = new Date();

tempoTranscorrido(dataEntrada, dataAtual);

function tempoTranscorrido(a, b) {
  let tempo = dataAtual - dataEntrada;

  let diasCount = 1000 * 60 * 60 * 24;
  let mesesCount = diasCount * 30.41666666666667;
  let anosCount = mesesCount * 12;

  let anos = Math.floor(tempo / anosCount);
  tempo = tempo - anos * anosCount;
  let meses = Math.floor(tempo / mesesCount);
  tempo = tempo - meses * mesesCount;
  let dias = Math.floor(tempo / diasCount);

  return console.log(
    `Tempo transcorrido: ${anos} anos ${meses + 1} meses ${dias} dias`
  );
}
