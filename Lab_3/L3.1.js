'use strict';

function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Аргументи мають бути числами');
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('--- 1. Генерація випадкового числа ---');
console.log('random(10, 20):', random(10, 20)); 
console.log('random(5):', random(5)); 
