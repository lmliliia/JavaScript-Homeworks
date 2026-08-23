// #mkGDenYnNjn.html
//
//  Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400



function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let rate = null;

    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            rate = currencyValues[i].value;
            break;
        }
    }

    if (rate === null) {
        return 'Валюта не знайдена';
    }

    return sumUAH / rate;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD')); // 400