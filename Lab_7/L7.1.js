function removeElement(array, item) {
    const index = array.indexOf(item);
  
    // Видаляємо елемент, якщо він знайдений
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

// Перевірка функції
const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 5);
console.log(array1); // [1, 2, 3, 4, 6, 7]

const array2 = ['Kiev', 'Beijing', 'Lima', 'Warsaw', 'Berlin'];
removeElement(array2, 'Lima');
removeElement(array2, 'Berlin');
console.log(array2); // ['Kiev', 'Beijing', 'Warsaw']
