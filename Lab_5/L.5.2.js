function array() {
    const items = [];
    function get(index) {
        return items[index];
    }
    get.push = function(value) {
        items.push(value);
    };
    get.pop = function() {
        return items.pop();
    };
    return get;
}

//Створення масиву
const arr = array();

// Додавання елементів
arr.push('first');
arr.push('second');
arr.push('third');

// Отримування елементів
console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

// Видалення останніх елементів
console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first
console.log(arr.pop()); // undefined
