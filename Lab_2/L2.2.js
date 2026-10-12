'use strict';

function range(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

function rangeOdd(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
}

console.log('range:', range(15, 30));
console.log('rangeOdd:', rangeOdd(15, 30));
