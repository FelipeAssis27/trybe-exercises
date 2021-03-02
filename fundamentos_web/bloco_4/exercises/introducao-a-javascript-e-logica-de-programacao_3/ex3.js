let n = 5;
let lado = "*";
let linha = "";
let position = n;

for (i=0; i<n; i += 1) {
    for (let coluna = 0; coluna <=n; coluna += 1) {
        if (coluna < position) {
            linha = linha + " ";
        }  else {
            linha = linha + lado;
        }
    }
    console.log(linha);
    linha = "";
    position -=1;
}