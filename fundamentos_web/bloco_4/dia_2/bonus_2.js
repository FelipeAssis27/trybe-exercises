let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

numbers.sort(ordenacao);
numbers.reverse();

function ordenacao(a, b) {
  return a-b;
  //sem 'numbers.reverse()' -> 'return b - a';  
}
  console.log(numbers);