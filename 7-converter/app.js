'use strict';

// курсы валют

let currencyRates = {
  'USD': '72.7',
  'EUR': '78.3',
  'GBR': '84.3',
  'TRY': '3.5',
  'RUB': '1',

  // текущая валюта - currentCurrency
  // желаемая валюта - desiredCurrency
  // сумма - amount
  currencyСonverter: function (currentCurrency, desiredCurrency, amount) {
    const currentRate = this [currentCurrency]; // текущий курс
    const desiredRate = this [desiredCurrency]; // желаемая валюта
  
    const amounts = amount * currentRate; // сумму * текущий курс
    const convertedAmount = (amounts / desiredRate); // текущю курс / на желаемую валюту
    switch(currentCurrency) {
      case 'USD':
        break;
      case 'EUR':
        break;
      case 'GBR':
        break;
      case 'TRY':
        break;
      case 'RUB':
        break;
      default: 
      return null;
    }
    return Number(convertedAmount.toFixed(2)); // остаток уменьшил - дает число
  }
};

currencyRates.currencyСonverter();

console.log(currencyRates.currencyСonverter('RUB', 'EUR', 1000));
console.log(currencyRates.currencyСonverter('EUR', 'TRY', 1000));
console.log(currencyRates.currencyСonverter('EUI', 'RUB', 1000));