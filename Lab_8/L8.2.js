function store(value) {
    // Повертаємо функцію, яка зберігає доступ до value
    return function() {
        return value;
    };
}

// Перевірка функції
const read = store(5);
const value = read();
console.log(value); // 5
