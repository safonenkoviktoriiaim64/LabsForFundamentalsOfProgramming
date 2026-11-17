function contract(fn, ...types) {
    // Повертаємо нову функцію з перевіркою типів
    return function(...args) {

        // Перевіряємо кількість аргументів
        if (args.length !== types.length - 1) {
            throw new TypeError('Неправильна кількість аргументів');
        }

        // Перевіряємо типи переданих аргументів
        args.forEach((arg, index) => {
            if (typeof arg !== types[index]) {
                throw new TypeError(
                    `Аргумент ${index + 1} повинен мати тип ${types[index].name}`
                );
            }
        });

        // Виконуємо початкову функцію
        const result = fn(...args);

        // Перевіряємо тип результату
        const expectedType = types[types.length - 1];
        if (typeof result !== expectedType) {
            throw new TypeError(
                `Результат повинен мати тип ${expectedType.name}`
            );
        }
        return result;
    };
}

// Перевірка для чисел
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.log(res1); // 5

// Перевірка для рядків
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.log(res2); // Hello world!
