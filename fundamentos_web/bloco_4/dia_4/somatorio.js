function somatorio (numbers) {
    let total = 0;
    for (let i = 1; i <= numbers; i += 1) {
        total = total + i;
    }
    return total;
}
console.log(somatorio(5)); 