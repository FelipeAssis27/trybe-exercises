// 1. Gerar um numero aleatorio
function generateRandomNumber() {
    return Math.ceil(Math.random() * 60);
  }
 /*console.log(generateRandomNumber());*/
  
  /* 2. Gerar os numeros da megasena */
  function megaSenaDrawn() {
    let megaSenaNumbers = [];
    for (let index = 0; index < 6; index += 1) {
      megaSenaNumbers.push(generateRandomNumber());
    }
  
    return megaSenaNumbers;
  }
  console.log(megaSenaDrawn());
  
  /*// 3. Confere o resultado da megasena
  function checkMegaSenaResult(result, game) {
    let numberOfHits = 0;
  
    for (let index = 0; index < result.length; index += 1) {
      for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
        if (result[index] === game[gameIndex]) {
          numberOfHits += 1;
        }
      }
    }
  
    return numberOfHits;
  }
  
  let olivaGame = megaSenaDrawn();
  let alexandreGame = megaSenaDrawn();
  let adelinoGame = megaSenaDrawn();
  
  let megaSenaResult = megaSenaDrawn();
  
  console.log('Acertos do Oliva: ' + checkMegaSenaResult(megaSenaResult, olivaGame));
  console.log('Acertos do Alexandre: ' + checkMegaSenaResult(megaSenaResult, alexandreGame));
  console.log('Acertos do Adelino: ' + checkMegaSenaResult(megaSenaResult, adelinoGame));
  */