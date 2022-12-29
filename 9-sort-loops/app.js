'use strict';

const arr = [1, 40, -5, 10, 0];

//************ Первый вариант по возрастанию *************/

const positiveNumber = (array) => {
    for (let i = 0; i < array.length; i++) {
        for( let k = i; k < array.length; k++){
            if (array[i] < array[k]) { // если (поменять оператор массив будет собран подругому)
                const count = array[i]; // пусть arr cохраняет исходное значение
                array[i] = array[k]; // получаем 40, 10, 1, 0; 
                console.log(array[i]);
                array[k] = count; // установливаем большее значение в исходное значение
            }
        }
    }
    return array
}

const result = positiveNumber(arr)
console.log(result) // [40, 10, 1, 0, -5]


//************ Второй вариант по возрастанию *************/

const positiveNumber2= (array) => {
    for (let i = 0; i < array.length; i++) {
        for( let k = i; k < array.length; k++){
            const arrOn = [];
            if (array[i] < array[k]) { // если
                array[i] = array[k]; // получаем 40, 10, 1, 0; 
                array[k] = array.push(count); // запушим в конец переменной archi и присвоем к array(результат)
            }
        }
    }
    return array
}
const result2 = positiveNumber2(arr)
console.log(result2) // [40, 10, 1, 0, -5]


//************ Третий вариант по убыванию *************/


const negativeNumber = (array) => {
    for (let i = array.length-1; i >= 0; i--) { // идем с конца массива (цикл на оборот)
        for (let k = i; k >= 0; k--) {
            if (array[i] < array[k]) { // если поменять оператор массив будет на оборот
                const count = array[i]
                array[i] = array[k]
                array[k] = count
            }
        }
    } return array
}

const result3 = negativeNumber(arr)
console.log(result3)


//************ Четвертый вариант по убыванию *************/

const negativeNumber2 = (array) => {
    for (let i = array.length-1; i >= 0; i--) { // идем с конца массива (цикл на оборот)
        for (let k = i; k >= 0; k--) {
            const count = [];
            if (array[i] < array[k]) { 
                array[i] = array[k]
                array[k] = count.push(array)
            }
        }
    } return array
}

const result4 = negativeNumber2(arr)
console.log(result4)