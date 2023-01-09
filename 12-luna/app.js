"use strict";

// ***** Карта *****

const mapVisa = "4561-2612-1234-5464";

// ***** Первый вариант *****

function mapValid(string) {
  const joinNumber = string.split("-").join(""); // убрал все лишнее
  let evenValue = 0; // четное значение
  for (let i = 0; i < joinNumber.length; i++) {
    // беру всю строку с картой и перебираю
    if (i % 2 === 0) {
      if (joinNumber[i] * 2 > 9) {
        // получаем нечетные числа (46211356) и умножаем на 2
        evenValue += joinNumber[i] * 2 - 9; // четные числа
      } else {
        evenValue += joinNumber[i] * 2;
      }
    }
  }
  return evenValue % 10 === 0;
}

console.log(mapValid(mapVisa));

// ***** Второй вариант  *****

/**
 *  1. создал функцию mapValid1
 *
 *  2. создал константу splitNumber -
 *
 *  а) копируем slice() сплитом убераю дефисы и конверктирую строку в массив.
 *
 *  б) джойном собираю чистую строку без дефисов.
 *
 *  в) опять сплитом конвертирую в массив раскидываю строки.
 *
 *  г) мапом создаю новый массив с цифрами (вместо строк).
 *
 *  д) Итог получаю чистый массив [4,5,6,1,2,6,1,2,1,2,3,4,5,4,6,4]
 *
 *  3. Использую метод reduce()
 *
 *  а) index = находим по индексу нечетный номера (не цифры в массиве)!
 *
 *  б) и item =  каждый элемент умножаем на два
 *
 *  в) и если item больше 9 то вычитаем из него (9)
 *
 *  г) делаем возврат reduce() т.е складываем все в аккамулятор = получаем (57)
 *
 *  д) делаем возврат функции mapValid1 - константу splitNumber если есть остаток от 10 то функция выдаст false. Если нет остатка то true!
 *
 */

const mapValid1 = (string) => {
  const splitNumber = string
    .slice()
    .split("-")
    .join("")
    .split("")
    .map(Number)
    .reduce((acc, item, index) => {
      index % 2 === 0 && (item *= 2);
      item > 9 && (item -= 9);
      return acc + item;
    }, 0);
  return splitNumber % 10 === 0;
};

console.log(mapValid1(mapVisa));
