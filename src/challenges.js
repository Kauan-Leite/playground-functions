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
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosTotais = 0;
  let pontosVitorias = wins * 3;
  let pontosEmpates = ties * 1;

  pontosTotais = pontosVitorias + pontosEmpates;

  return pontosTotais;
}

// Desafio 6
function highestCount(numbersArray) {
  // seu código aqui
  let maior = -10;
  let vezes;

  for(let index in numbersArray){

    if(numbersArray[index] > maior){
      maior = numbersArray [index];
      vezes = 1
    } else if (numbersArray[index] == maior) {
      vezes += 1;
    }

  }

  return vezes;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  calcCat1 = cat1 - mouse ;
  calcCat2 = cat2 - mouse ;
  calcIgual1 = cat1 + mouse;
  calcIgual2 = cat2 - mouse;

  if(calcIgual1 == calcIgual2){
    return 'os gatos trombam e o rato foge';
  }

  if(calcCat1 < calcCat2){
    return 'cat1';
  }
  if(calcCat2 < calcCat1){
    return 'cat2';
  }


}


// Desafio 8
function fizzBuzz(arrayNum) {
  // seu código aqui
let infos = [];

  for(let index = 0; index < arrayNum.length; index += 1){

      if(arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0){
        infos.push('fizzBuzz');
      }
      else if(arrayNum[index] % 3 === 0){
        infos.push('fizz');
      }
      
      else if(arrayNum[index] % 5 === 0){
        infos.push('buzz');
      }

      else{
        infos.push('bug!');
      }

  }

  return infos;

}
  

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let phraseFinal = '';

  for(let index in phrase){

    if(phrase[index] == 'a'){

      phraseFinal += '1';
    } else 
    if(phrase[index] == 'e'){
      phraseFinal += '2';
    } else
    if(phrase[index] == 'i'){
      phraseFinal += '3';
    } else
    if(phrase[index] == 'o'){
      phraseFinal += '4';
    } else
    if(phrase[index] == 'u'){
      phraseFinal += '5';
    }
    
    
    else{
      phraseFinal += phrase[index];
    }


  }

  return phraseFinal;
}

function decode(phrase) {
  // seu código aqui
  let phraseFinal = '';

  for(let index in phrase){

    if(phrase[index] == '1'){

      phraseFinal += 'a';
    } else 
    if(phrase[index] == '2'){
      phraseFinal += 'e';
    } else
    if(phrase[index] == '3'){
      phraseFinal += 'i';
    } else
    if(phrase[index] == '4'){
      phraseFinal += 'o';
    } else
    if(phrase[index] == '5'){
      phraseFinal += 'u';
    }
    
    
    else{
      phraseFinal += phrase[index];
    }


  }

  return phraseFinal;

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
