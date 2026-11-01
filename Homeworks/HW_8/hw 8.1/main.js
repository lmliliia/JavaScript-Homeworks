// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.


function deepCopy(value) {
    // undefined, null, NaN, примітиви і функції повертаємо як є
    if (value === undefined || value === null) return value;
    if (Number.isNaN(value)) return value;
    if (typeof value !== "object") return value; // функції теж тут

    const copy = Array.isArray(value) ? [] : {};

    for (const key in value) {
        copy[key] = deepCopy(value[key]);
        console.log(key);
    }

    return copy;
}

// Перевірка
const obj = {
    name: "Alex",
    empty: null,
    notDefined: undefined,
    notNumber: NaN,
    address: { city: "Kyiv" },
    list: [1, 2, { a: 3 }],
    innerObj: {
        innerObj2: {
            field1: "field1",
            field2: "field2",
        },
        abc: "abc",
    },
    sayHi() {
        return "Hi, " + this.name;
    },
};

const clone = deepCopy(obj);

obj.address.city = "Lviv";
obj.innerObj.innerObj2.field1 = "1, 2 ,3";
// console.log(obj.address.city); // Kyiv
// console.log(clone.sayHi()); // Hi, Alex
console.log(obj);
console.log(clone);
