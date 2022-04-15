// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui

  if(numbers.length != 11){
    let msgPassNumMax = ("Array com tamanho incorreto.");
    return msgPassNumMax;
  }

  let repeticao0 = 0;
  let repeticao1 = 0;
  let repeticao2 = 0;
  let repeticao3 = 0;
  let repeticao4 = 0;
  let repeticao5 = 0;
  let repeticao6 = 0;
  let repeticao7 = 0;
  let repeticao8 = 0;
  let repeticao9 = 0;


  for(let keys in numbers){

    if(numbers[keys] < 0 || numbers[keys] > 9){
      let msgNumErro = ("não é possível gerar um número de telefone com esses valores");
      return msgNumErro;
      break;
    }


    switch (numbers[keys]){
    case 0:
        repeticao0 += 1;
        break;
    case 1:
        repeticao1 += 1;
        break;
    case 2:
        repeticao2 += 1;
        break;
    case 3:
        repeticao3 += 1;
        break;
    case 4:
        repeticao4 += 1;
        break;
    case 5:
        repeticao5 += 1;
        break;
    case 6:
        repeticao6 += 1;
        break;
    case 7:
        repeticao7 += 1;
        break;
    case 8:
        repeticao8 += 1;
        break;
    case 9:
        repeticao9 += 1;
        break;
    }

  }

  if(repeticao0 >= 3 || repeticao1 >= 3 || repeticao2 >= 3 || repeticao3 >= 3 || repeticao4 >= 3 || repeticao5 >= 3 || repeticao6 >= 3 || repeticao7 >= 3 || repeticao8 >= 3 || repeticao9 >= 3){
    let msgIguais = ('não é possível gerar um número de telefone com esses valores');
    return msgIguais

  } else{
    let msgNumFinal = ('(' + numbers[0] + numbers[1] + ')' +  ' ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10]);

    return msgNumFinal;

  }
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let somaAB = lineA + lineB;
  let somaBC = lineB + lineC;
  let somaAC = lineA + lineC;
  let triangle;

  if(somaAB < lineC || somaBC < lineA || somaAC < lineB){
    triangle = false;
  } else {
    triangle = true;
  }

  return triangle;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
