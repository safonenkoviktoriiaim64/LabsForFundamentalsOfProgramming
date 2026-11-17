// Цикл for
function sumFor(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

// Цикл for...of
function sumForOf(...args) {
    let result = 0;
    for (const number of args) {
        result += number;
    }
    return result;
}

// Цикл while
function sumWhile(...args) {
    let result = 0;
    let i = 0;
    while (i < args.length) {
        result += args[i];
        i++;
    }
    return result;
}

// Цикл do...while
function sumDoWhile(...args) {
    let result = 0;
    let i = 0;
    if (args.length === 0) {
        return result;
    }

    do {
        result += args[i];
        i++;
    } while (i < args.length);
    return result;
}

// Метод reduce()
function sumReduce(...args) {
    return args.reduce((total, number) => total + number, 0);
}

// Перевірка функції
console.log(sumFor(1, 2, 3));       // 6
console.log(sumForOf(0));           // 0
console.log(sumWhile());            // 0
console.log(sumDoWhile(1, -1, 1));  // 1
console.log(sumReduce(10, -1, -1, -1)); // 7
