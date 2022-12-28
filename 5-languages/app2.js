'use strict';


const languagesEN = 'EN'; 
const languagesRU = 'RU';
const languagesDE = 'DE';
const languagesKZ = 'KZ'; // этого языка нет!

function getLanguages (lang) {
    switch(lang) {
        case 'EN': 
            console.log('Hello Dima!');
            break
        case 'RU':
            console.log('Привет Дима!');
            break
        case 'DE':
            console.log('Hallo Dima!');
            break
        default: 
        console.log('No languages!');
            break
    }       
}

console.log(getLanguages(languagesEN));
console.log(getLanguages(languagesRU));
console.log(getLanguages(languagesDE));
console.log(getLanguages(languagesKZ)); // раз его нет в условии Switch (case) выводит default - No languages!

//Возврат функции удалил - а то что возвращается undefined(не определено) - это нормально?




