let custo = 34.50
let custoTotal = custo + custo * 20/100;
let venda = -56.46
lucro = 1000 * (venda - custoTotal);

if (custo < 0 || venda < 0) {
    console.log("Erro!");
}
else {
    console.log(lucro);
}