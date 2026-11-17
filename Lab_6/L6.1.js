const pipe = (...fns) => {
    // Перевірка, що всі аргументи являються функціями
    if (!fns.every(fn => typeof fn === 'function')) {
        throw new TypeError('Всі аргументи мають бути функціями');
    }

    // Послідовне виконання функції
    return x => fns.reduce((result, fn) => fn(result), x);
};

// Почадкові функції
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

// Перевірка структури
const f1 = pipe(inc, twice, cube);
console.log(f1(5)); // 1728

const f2 = pipe(inc, inc);
console.log(f2(7)); // 9

// Перевірка помилки
const f3 = pipe(inc, 7, cube); // TypeError
