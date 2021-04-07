let salBruto = 3000;
let descInss = 0;
let salLiquido;
const alq1 = 7.5/100;
const alq2 = 15/100;
const alq3 = 22.5/100;
const alq4 = 27.5/100;

if (salBruto <= 1556.94) {
     descInss = salBruto - salBruto *8/100;
}
else if (salBruto >= 1556.95 && salBruto <= 2594.92) {
    descInss = salBruto - salBruto *9/100;
}
else if (salBruto >= 2594.93 && salBruto <= 5189.82) {
     descInss = salBruto - salBruto *11/100;
}
else {
     descInss = salBruto - 570.88;
}
console.log(descInss);

if (descInss <= 1903.98) {
    salLiquido = descInss;
    console.log(salLiquido);
}
else if (descInss >= 1903.99 && descInss <= 2826.65) {
    salLiquido = descInss - descInss * alq1 + 142.80;
    console.log(salLiquido);
}
else if (descInss >= 2826.66 && descInss <= 3751.05) {
    salLiquido = descInss - descInss * alq2 + 354.80;
    console.log(salLiquido);
}
else if (descInss >= 3751.06 && descInss <= 4664.68) {
    salLiquido = descInss - descInss * alq3 + 636.13;
    console.log(salLiquido);
}
else {
    salLiquido = descInss - descInss * alq4 + 869.36;
    console.log(salLiquido);
}
