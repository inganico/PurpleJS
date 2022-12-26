'use strict';

const hasLicence = true; // Имеет права (true - да / false нет)
const age = 18; // Возраст (с 18 лет)
const isDrunk = false; // Пьян или нет (true - да / false нет)

const result = (hasLicence === true || age >= 18) && !isDrunk;
console.log(`Может ли вести машину пользователь: ${result ? 'может' : 'не может'}`)

