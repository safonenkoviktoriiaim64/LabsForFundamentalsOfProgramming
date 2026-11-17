function max(matrix) {
    let maximum = -Infinity;
    for (const row of matrix) {
        for (const number of row) {
            if (number > maximum) {
                maximum = number;
            }
        }
    }
    return maximum;
}

// Перевірка функції
const m = max([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
console.log(m); // 9
