function Algarismos(string) {
    let algarismos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let arrayNumbers = [];
    let result = 0;

    for (let indice in string) {
        arrayNumbers[indice] = algarismos[string[indice]];
      }

    for (let indice in arrayNumbers) {
        if (arrayNumbers[indice] < arrayNumbers[indice + 1]) {
            arrayNumbers[indice + 1] = arrayNumbers[indice + 1] - arrayNumbers[indice];
        } else {
            result += arrayNumbers[indice];
        }
    }
    return result;
}
console.log(Algarismos('MMXVIII'));
