//#bq1zkx7WP

// створити сторінку з довільним блоком, в середині якого є значення "100грн"

// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.

//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

const step = 10;// на скільки зростає ціна
const startPrice = 100;//початкова ціна
const minInterval = 10000;//10с в мс

const priceEl = document.getElementById('price');
const now = Date.now();

let price = parseInt(localStorage.getItem('price'), 10);
const lastLoad = parseInt(localStorage.getItem('lastLoad'), 10);

if (isNaN(price) || isNaN(lastLoad)) {
    // перше відвідування
    price = startPrice;
} else if (now - lastLoad > minInterval) {
    // з попереднього завантаження минуло більше 10 секунд
    price += step;
}
// інакше (менше 10 секунд) — ціна не змінюється

localStorage.setItem('price', price);
localStorage.setItem('lastLoad', now);

priceEl.textContent = price + 'грн';