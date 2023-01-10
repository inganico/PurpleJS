"use strict";

// ***** Карта *****

const mapVisa = "4563-2612-1234-5464";

// ***** Первый вариант *****

function mapValid(string) {
  const joinNumber = string.split("-").join(""); 
  let sumLuna = 0;
  for (let i = 0; i < joinNumber.length; i++) {
    
    if (i % 2 === 0) {
      if (joinNumber[i] * 2 > 9) {
    
        sumLuna += joinNumber[i] * 2 - 9; // вот тут идет мутация
      } else {
        sumLuna += joinNumber[i] * 2; // и сдесь правильно?
      }
    }
  }
  return sumLuna % 10 === 0;
}

//ЭТО ФУНКЦИЯ ПОЛУЧАЕТСЯ НЕ ЧИСТАЯ!!!

console.log(mapValid(mapVisa));

// ***** Второй вариант  *****

/**
 *  1. создал функцию mapValid1
 *
 *  2. создал константу splitNumber -
 *
 *  а) сплитом убераю дефисы и конверктирую строку в массив.
 *
 *  б) джойном собираю чистую строку без дефисов.
 *
 *  в) опять сплитом конвертирую в массив раскидываю строки.
 *
 *  г) мапом создаю новый массив с цифрами (вместо строк).
 *
 *  д) Итог получаю чистый массив [4,5,6,1,2,6,1,2,1,2,3,4,5,4,6,4]
 *
 */

const mapValid1 = (string) => {
  const splitNumber = string
    .split("-")
    .join("")
    .split("")
    .map(Number)
    .reduce((acc, item, index) => {
      if (index % 2 === 0) {  // находим нечетные по порядку
        if (item * 2 > 9) { // каждую цифру не четную если она > 9 возвращаем acc+item *2 - 9
          return acc + item * 2 - 9;
        }
        return acc + item * 2; // все цифры уножаем на 2 и возвращаем
      } else {
        return acc + Number(item); // возвращаем все цифры складываем в acc
      }
    }, 0);
  return splitNumber % 10 === 0; // от общей суммы ищем остаток от 10
};

console.log(mapValid1(mapVisa));

// ЭТА ФУНКЦИЯ ЧИСТАЯ!!!
