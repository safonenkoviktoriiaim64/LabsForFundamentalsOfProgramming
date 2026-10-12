'use strict';

function average(a: number, b: number): number {
    return (a + b) / 2;
}

function square(x: number): number {
    return x * x;
}

function cube(x: number): number {
    return x * x * x;
}

function calculate(): number[] {
    const results: number[] = [];
    for (let i = 0; i <= 9; i++) {
        const currentAverage = average(square(i), cube(i));
        results.push(currentAverage);
    }
    return results;
}

console.log('calculate:', calculate());
