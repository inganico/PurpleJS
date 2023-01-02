'use strict';

const arr = [1, 40, -5, 10, 0];
const copyArr = arr.slice() // копируем массив arr

// //************ Первый вариант по возрастанию *************/

const sortDescending = (array) => {
    for (let i = 0; i <= array.length; i++) {
        for( let k = 0; k <= array.length; k++){ // сравнение убрал с i
            if (array[i] > array[k]) { // если (поменять оператор массив будет собран подругому)
                let count = array[i]; // пусть arr cохраняет исходное значение
                array[i] = array[k]; // получаем 40, 10, 1, 0; 
                array[k] = count; // установливаем большее значение в исходное значение
            } 
        }
    }
    return array
}

const result = sortDescending(copyArr);
console.log(result); // [40, 10, 1, 0, -5];
console.log(arr) // [1, 40, -5, 10, 0]; // массив не мутировал


// //************ Второй вариант по убыванию *************/

const sortAscending = (array) => {
    for (let i = 0; i <= array.length; i++) {
        for( let k = 0; k <= array.length; k++){ // сравнение убрал с i
            if (array[i] < array[k]) { // если (поменять оператор массив будет собран подругому)
                let count = array[i]; // пусть arr cохраняет исходное значение
                array[i] = array[k]; // получаем 40, 10, 1, 0; 
                array[k] = count; // установливаем большее значение в исходное значение
            } 
        }
    }
    return array
}


const result2 = sortAscending(copyArr);
console.log(result2);
console.log(arr);


// //************ Полная функция с соритровкой *************/

const getSortedArr = (array, type = true) => {
    for (let i = 0; i <= array.length; i++) {
        for( let k = 0; k <= array.length; k++){ // сравнение убрал с i
            if (array[i] < array[k] && type) { // если (поменять оператор массив будет собран подругому)
                type = array[i]; // пусть arr cохраняет исходное значение
                array[i] = array[k]; // получаем 40, 10, 1, 0; 
                array[k] = type; // установливаем большее значение в исходное значение
            } 
        }
    }return array
}
const result3 = getSortedArr(copyArr, false);
console.log(result3);

const result4 = getSortedArr(copyArr, true); //(с true = не выходит - что то делаю не правильно - сломал голову) )
console.log(result4);