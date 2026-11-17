function seq(...args) {
    const functions = [...args];
    function chain(fn) {
        if (typeof fn === 'number') {
            return functions.reduce((result, func) => func(result), fn);
        }
        functions.push(fn);
        return chain;
    }
    return chain;
}

// Перевірка функції
console.log(seq(x => x + 7)(x => x * 2)(5)); // 17
console.log(seq(x => x * 2)(x => x + 7)(5)); // 24
console.log(
    seq(x => x + 1)
        (x => x * 2)
        (x => x / 3)
        (x => x - 4)(7)
);// 3
