'use strict';

const arr = [
    true, false, true, false,
    "hello", "world", "JavaScript", "word",
    5, 12, -200, 3.14, 0, NaN, Infinity,
    undefined, undefined,
    null, null,
    12345678901234567890n, 100n,
    Symbol("id"), Symbol("key"),
    function () {},
    () => console.log("Hello"),
    {}, { name: "Alex" },
    [], [1, 2, 3],
    new Date(),
    new Map(),
    new Set()
];

const types = {};

for (const item of arr) {
    const type = typeof item;

    if (!(type in types)) {
        types[type] = 0;
    }

    types[type]++;
}

console.dir(types);
