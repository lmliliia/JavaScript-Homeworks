//#gsKLAsNWM

// Через Array.prototype. створити власний foreach, filter

// ==== myForEach ====
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i);
    }
};

// ==== myFilter ====
Array.prototype.myFilter = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            result.push(this[i]);
        }
    }

    return result;
};


// ==== Перевірка ====
let numbers = [1, 2, 3, 4, 5, 6];

numbers.myForEach(function (item, index) {
    console.log(index, item);
});

let evenNumbers = numbers.myFilter(function (item) {
    return item % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]