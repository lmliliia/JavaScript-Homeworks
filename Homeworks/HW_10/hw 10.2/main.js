// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next

// при завантаженні сторінки з'являються перші 10 об'єктів.

//     При натисканні next виводяться наступні 10 об'єктів

// При натисканні prev виводяться попередні 10 об'єктів



// 1. масив на 100 об'єктів та дві кнопки prev next

let arr = [];

for (let i = 1; i <= 100; i++) {
    arr.push({ id: i, name: 'Item ' + i });
}

let list = document.getElementById('list');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let pageInfo = document.getElementById('page-info');

let page = 1; // поточна сторінка
let count = 10; // скільки об'єктів показуємо на сторінці
let allPages = Math.ceil(arr.length / count); // всього сторінок (100 / 10 = 10)

// функція яка показує 10 об'єктів на сторінці
function showItems() {
    let start = (page - 1) * count;
    let end = start + count;
    let items = arr.slice(start, end);

    list.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        list.innerHTML += '<li>' + items[i].id + '. ' + items[i].name + '</li>';
    }

    pageInfo.innerHTML = 'Сторінка ' + page + ' з ' + allPages;

    // вимикаємо кнопки на першій і останній сторінці
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === allPages;
}

// 2. при завантаженні сторінки з'являються перші 10 об'єктів

showItems();

// 3. при натисканні next виводяться наступні 10 об'єктів

nextBtn.onclick = function () {
    if (page < allPages) {
        page++;
        showItems();
    }
};

// 4. при натисканні prev виводяться попередні 10 об'єктів

prevBtn.onclick = function () {
    if (page > 1) {
        page--;
        showItems();
    }
};