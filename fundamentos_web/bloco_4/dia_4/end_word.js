function word(palavra, fim) {
    palavra = palavra.split("");
    fim = fim.split("");
    control = true;
    for (let i =0; i<fim.length; i++) {
        if (palavra[palavra.length - fim.length + i] != fim[i]) {
            control = false;
        }
    }
    return control;
}
console.log(word('trybe', 'be'));
console.log(word('joaofernando', 'nan')); 