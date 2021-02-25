let impares = 0;
let numbers = [6, 3, 121, 10, 70, 82, 100, 2, 352, 274];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        impares += 1;
    }
}
if (impares == 0) {
    console.log("Nenhum valor ímpar encontrado");
} else if (impares != 0) {
    console.log(impares);
}

