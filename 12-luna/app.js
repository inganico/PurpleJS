"use strict";

// ***** Карта *****

const mapVisa = "4561-2612-1234-5464";

const mapValid1 = (string) => {
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

console.log(mapValid1(mapVisa));

// ЭТА ФУНКЦИЯ ЧИСТАЯ!!!
