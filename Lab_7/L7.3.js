function unique(array) {
    // Створюємо новий масив без повторень
    return array.filter((item, index) => {
        return array.indexOf(item) === index;
    });
}

// Перевірка функції
const result1 = unique([2, 1, 1, 3, 2]);
console.log(result1); // [2, 1, 3]
const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2); // ['top', 'bottom', 'left']
