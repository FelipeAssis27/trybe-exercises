let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let position = 1;
let array = [];

for (let i = 0; i < numbers.length; i++) {
    position = position * numbers[i];
    array.push(position); 
}
console.log(array);
