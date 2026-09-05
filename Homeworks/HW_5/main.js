//#mkGDenYnNjn

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// Це мають бути стрілочні функції


const exchange = (sumUAH,currencyValues, exchangeCurrency) => {
    let rate = null;

    currencyValues.forEach(item => {
        if (item.currency === exchangeCurrency) {
            rate = item.value;
        }
    });

    if (rate === null) {
        return 'Валюта не знайдена';
    }

    return sumUAH / rate;
};

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));//250