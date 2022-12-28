'use strict';

const hasLicence = false; // Имеет права (true - да / false нет)
const age = 32; // Возраст (с 18 лет)
const isDrunk = false; // Пьян или нет (true - да / false нет)

const result = (age >= 18) && !isDrunk && hasLicence;
console.log(`Может ли вести машину пользователь: ${result ? 'может' : 'не может'}`)

