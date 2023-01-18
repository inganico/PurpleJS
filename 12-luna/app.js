"use strict";

// ***** Карта *****

const Visa = "4561-2612-1234-5464";

const valid = (string) => {
  const splitNumber = string
    .split("-")
    .join("")
    .split("")
    .reduce((acc, item, index) => {
      if (index % 2 === 0) {
        if (item * 2 > 9) {
          return acc + item * 2 - 9;
        }
        return acc + item * 2;
      } else {
        return acc + Number(item);
      }
    }, 0);
  return splitNumber % 10 === 0;
};

console.log(valid(Visa));

// ЭТА ФУНКЦИЯ ЧИСТАЯ!!!
