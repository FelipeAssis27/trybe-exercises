let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1]) {
        array.push(numbers[i] * numbers[i + 1]);
    } else {
        array.push(numbers[i] * 2);
    }
}
console.log(array);
