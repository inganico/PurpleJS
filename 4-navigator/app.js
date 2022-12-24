'use strict'
const addressLat = 15;
const addressLong = 30;
const positionLat = 100;
const positionLong = 200;

/**
 * Math.trunc - удаляем дробную часть.
 * Math.sqrt - возвращает квадратный корень числа.
 * Math.pow - возвращает возведенное число в степень.
 * Math.floor - округление в меньшую сторону.
 * 
 * AB = √(xb - xa)2 + (yb - ya)2
 * Формула вычисления расстояния между двумя точками A(xa, ya) и B(xb,  yb) на плоскости:
 */

// ======== Первый вариант ==========

const result = Math.floor( Math.sqrt(Math.pow((addressLat - addressLong), 2) + Math.pow((positionLong -positionLat), 2))
)
console.log(`Растояние от текущего местоположения до назначения ${result} км`);

// ======== Второй вариант ==========

function getDistance(x1, y1, x2, y2)
{
	return Math.trunc(Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))) ;
}

const result2 = getDistance(addressLat, positionLat, addressLong, positionLong);

console.log(`Растояние от текущего местоположения до назначения ${result2} км`);

// Не знаю правильно или нет!

