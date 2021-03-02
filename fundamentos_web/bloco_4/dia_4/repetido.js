function maisRepetido(numbers) {
    let contaRepetido = 0;
    let contaNumero = 0;
    let indexNumRep = 0;
    for (let index in numbers) {
        let verificaNumero = numbers[index];
        for (let index2 in numbers) {
            if (verificaNumero === numbers[index2]) {
                contaNumero += 1;
            }
        }
        if (contaNumero > contaRepetido) {
            contaRepetido = contaNumero;
            indexNumRep = index;
        }
        contaNumero = 0;
    }
    return numbers[indexNumRep];
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

/* Duas formas de resolver o exercício
function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero++;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }
  
  function maisRepetido(numeros) {
    let num = {};
  
    for (let i = 0; i < numeros.length; i += 1) {
      let valor = numeros[i];
      if (num[valor] === undefined) {
        num[valor] = 1;
      } else {
        num[valor] = num[valor] + 1;
      }
    }
  
    let contRepetido = 0;
    let contNumero = 0;
  
    for (let prop in num) {
      if (contRepetido < num[prop]) {
        contRepetido = num[prop];
        contNumero = prop;
      }
    }
  
    return contNumero;
  }
  
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); */