function iterate(object, callback) {
    // Перебираємо всі ключі об'єкта
    Object.keys(object).forEach(key => {
        // Передаємо ключ, значення та сам об'єкт у callback
        callback(key, object[key], object);
    });
}

// Перевірка функції
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
    console.log({ key, value });
});

// Результат:
// { key: 'a', value: 1 }
// { key: 'b', value: 2 }
// { key: 'c', value: 3 }
