/* function palindromo(string) {
    let reverse = string.split("").reverse().join("");
    if (reverse === string) {
        return true;
    } else {
        return false;
    }
} 

console.log(palindromo('kiprokó'));
console.log(palindromo('uau')); */

function palindrome(palavra) {
    let letras = palavra.split("");
    let isPalindrome = true;
    for (let index in letras) {
      if (letras[index] != palavra[(palavra.length - 1) - index]) {
        isPalindrome = false;
      }
    }
    return isPalindrome;
  }
  console.log(palindrome('ZaaZ')); 