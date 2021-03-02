/* function maiorNome(word) {
    let maiorNome = word[0];
    for (let index in word) {
        if (maiorNome.length < word[index].length) {
            maiorNome = word[index];
        }
        return maiorNome;
    }
} 
console.log(maiorNome(['João', 'Larápio', 'Teobaldo', 'Ratafúksias'])); */

   function maiorPalavra(string) {
    let maiorPalavra = string[0];
    for (let indice in string) {
      if (maiorPalavra.length < string[indice].length) {
        maiorPalavra = string[indice];
      }
    }
    return maiorPalavra;
  }
  
  console.log(maiorPalavra(['José', 'Lucas', 'Tibúrcio', 'Fernanda', 'Cairo', 'Joana'])); 