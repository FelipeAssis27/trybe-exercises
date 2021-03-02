function maiorValor(numeros) {
    let maior = 0;
    for (let index in numeros) {
        if (numeros[maior] < numeros[index]) {
            maior = index;
        }
    }
    return maior;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));

/* function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4 
  */