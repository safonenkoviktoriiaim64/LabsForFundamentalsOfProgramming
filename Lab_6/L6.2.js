function compose(...fns) {
    const listeners = [];

    // Перевірка аргументів
    if (!fns.every(fn => typeof fn === 'function')) {
        throw new TypeError('Все аргументы должны быть функциями');
    }

    // Функція структури
    const f = function (value) {
        try {
            return fns.reduceRight((result, fn) => fn(result), value);
        } catch (error) {
            listeners.forEach(listener => listener(error));
            return undefined;
        }
    };

    // Перегляд помилок
    f.on = function (event, callback) {
        if (event === 'error' && typeof callback === 'function') {
            listeners.push(callback);
        }
        return f;
    };
    return f;
}

// Початкові функції
const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

// Перевірка структури 
const f = compose(inc, twice, cube);
console.log(f(5)); // 126

//  Функція, що викликає помилкуу
const errorFn = x => {
    throw new Error('Виникла помилка!');
};

// Перегляд помилок
const g = compose(inc, errorFn, twice);

g.on('error', error => {
    console.log('Помилка:', error.message);
});

console.log(g(5)); // undefined
