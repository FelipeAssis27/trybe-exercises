let salBruto = 1500.10;
const alq1 = 7.5/100;
const alq2 = 15/100;
const alq3 = 22.5/100;
const alq4 = 27.5/100;

if (salBruto <= 1556.94) {
    let descInss = salBruto - salBruto *8/100;
}
else if (1556.94 < salBruto <= 2594.92) {
    let descInss = salBruto - salBruto *9/100;
}
else if (2594.92 < salBruto <= 5.189.82) {
    let descInss = salBruto - salBruto *11/100;
}
else {
    let descInss = salBruto - 570.88;
}

if (descInss <= 1903.98) {
    let Ir = 0;
    let salLiquido = descInss;
    console.log(salLiquido);
}
else if (1903.98 < descInss <= 2826.65) {
    let ir = descInss - descInss * alq1 - 142.80;
    console.log(ir);
}
else if (2826.65 < descInss <= 3751.05) {
    let ir = descInss - descInss * alq2 - 354.80;
    console.log(ir);
}
else if (3751.05 < descInss <= 4664.68) {
    let ir = descInss - descInss * alq3 - 636.13;
    console.log(ir);
}
else {
    let ir = descInss - descInss * alq4 - 869.36;
    console.log(ir);
}
