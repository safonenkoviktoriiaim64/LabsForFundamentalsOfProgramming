function removeElements(array, ...items) {
    // Перебираємо елементи, які потрібно видалити
    items.forEach(item => {
        let index;

        // Видаляємо всі входження елемента
        while ((index = array.indexOf(item)) !== -1) {
            array.splice(index, 1);
        }
    });
    return array;
}

// Перевірка функції
const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 5, 1, 6);
console.log(array1); // [2, 3, 4, 7]

const array2 = ['Kiev', 'Beijing', 'Lima', 'Warsaw', 'Berlin'];

removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2); // ['Beijing', 'Warsaw']
