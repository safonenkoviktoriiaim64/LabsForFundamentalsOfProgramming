function difference(array1, array2) {
    // Залишаємо елементи першого масиву,
    // яких немає у другому масиві
    return array1.filter(item => !array2.includes(item));
}

// Перевірка функції
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];

const result1 = difference(array1, array2);

console.log(result1); // [7, -2, 5]

const array3 = ['Beijing', 'Kiev'];
const array4 = ['Kiev', 'London', 'Baghdad'];

const result2 = difference(array3, array4);

console.log(result2); // ['Beijing']
