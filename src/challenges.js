// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  let resposta;

  if (value1 === true && value2 === true) {
    resposta = true;
  } else {
    resposta = false;
  }

  return resposta;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let resultadoFinal = base * height / 2;

  return resultadoFinal;
}

// Desafio 3
// Referencia do MDN .split()
function splitSentence(fraseOrigin) {
  // seu código aqui
  let separacao = fraseOrigin.split(" ");

  return separacao;

}



// Desafio 4
function concatName(fraseArray) {
  // seu código aqui
  let first = fraseArray[0];
  let calcLast = fraseArray.length - 1;
  let last = fraseArray[calcLast];

  let msg = last + ', ' + first;

  return msg;

}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
