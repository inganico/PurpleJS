'use strict';


const languagesEN = 'EN'; 
const languagesRU = 'RU';
const languagesDE = 'DE';

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
    } return lang
}

console.log(getLanguages(languagesEN));
console.log(getLanguages(languagesRU));
console.log(getLanguages(languagesDE));

// Вот такой код у меня получился - правильно или нет?