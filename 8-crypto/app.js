"use strict";

// ***** Шифратор *****

let cryptoStr = "javascript";

const stringCipher = (crypto) => {
  const str = crypto.split("").reverse().join("");
  return str;
};

const strCode = stringCipher(cryptoStr);

// ***** Дешифратор *****

const strCheck = (crypto, check) => {
  const str = crypto.split("").reverse().join("");
  if (str === check) {
    return true;
  }
  if (str === !check) {
    return false;
  }
  return str;
};

strCheck(cryptoStr, strCode);

console.log(strCheck(cryptoStr, strCode));
