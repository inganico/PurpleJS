"use strict";

// курсы валют

const Currency = {
  USD: 0.014,
  EUR: 0.015,
  TRY: 0.277,
  KZT: 6.82,
  RUB: 1,
};
// текущая валюта - currentCurrency
// желаемая валюта - desiredCurrency
// сумма - amount

function currencyСonverter(currentCurrency, desiredCurrency, amount) {
  if (!currentCurrency) {
    return null;
  } else if (!desiredCurrency) {
    return null;
  }
  return currentCurrency * amount * desiredCurrency;
}

currencyСonverter();

console.log(currencyСonverter(Currency.USD, Currency.KZT, 1000));
console.log(currencyСonverter(Currency.RUB, Currency.TRY, 1000));
console.log(currencyСonverter(Currency.TRY, Currency.EUR, 1000));
console.log(currencyСonverter(Currency.EDR, Currency.EUR, 1000));
console.log(currencyСonverter(Currency.TRY, Currency.EDR, 1000));
