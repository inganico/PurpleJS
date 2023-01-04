'use strict';

const arr = [1, 40, -5, 10, 0];


//************ Первый вариант по возрастанию *************/

const sortDescending = (array) => {
    let arr = array.slice()
    for (let i = 0; i <= arr.length -1; i++) {
        for( let j = i + 1; j <= arr.length; j++){ // сравнение убрал с i
            if (arr[i] > arr[j]) { // если (поменять оператор массив будет собран подругому)
                let count = arr[i]; // пусть arr cохраняет исходное значение
                arr[i] = arr[j]; // получаем 40, 10, 1, 0; 
                arr[j] = count; // установливаем большее значение в исходное значение
            } 
        }
    }
    return arr
}

const result = sortDescending(arr);
console.log(result); // [40, 10, 1, 0, -5];
console.log('********************')


// //************ Второй вариант по убыванию *************/

const sortAscendin = (array) => {
    let arr = array.slice()
    for (let i = 0; i <= arr.length -1; i++) {
        for( let j = i + 1; j <= arr.length; j++){ // сравнение убрал с i
            if (arr[i] < arr[j]) { // если (поменять оператор массив будет собран подругому)
                let count = arr[i]; // пусть arr cохраняет исходное значение
                arr[i] = arr[j]; // получаем 40, 10, 1, 0; 
                arr[j] = count; // установливаем большее значение в исходное значение
            } 
        }
    }
    return arr
}

const result2 = sortAscendin(arr);
console.log(result2);
console.log('********************')


// //************ Полная функция с соритровкой *************/


const SortType = {
    DESC: 'desc',
    ASC: 'asc',
};

const getSortedArr = (array, type = SortType.ASC) => {
    const arr = array.slice()
    for (let i = 0; i < arr.length -1; i++) {
        for( let j = i + 1; j < arr.length; j++){
            if (type === SortType.DESC && arr[i] < arr[j]) { 
                const temp = arr[i];
                arr[i] = arr[j]; 
                arr[j] = temp;
            } else if (type === SortType.ASC && arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j]; 
                arr[j] = temp;
            }
        }  
    }return arr
}
const result3 = getSortedArr(arr, SortType.ASC);
console.log(result3);
console.log('********************')
const result4 = getSortedArr(arr, SortType.DESC); 
console.log(result4);
console.log('********************')


// //************ Полная функция с соритровкой от НАСТАВНИКА *************/


const getSortedArray1 = (array, sortType = SortType.DESC) => {
    const arrayCopy = array.slice();
    
    for (let i = 0; i < arrayCopy.length - 1; i++) {
        for (let j = i + 1; j < arrayCopy.length; j++) {
        if (sortType === SortType.DESC && arrayCopy[i] < arrayCopy[j]) {
            [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
        } else if (sortType === SortType.ASC && arrayCopy[i] > arrayCopy[j]) {
            [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
        }
        }
    }
    
    return arrayCopy;
    }

console.log (getSortedArray1(arr, SortType.ASC))
console.log('********************')
console.log (getSortedArray1(arr, SortType.DESC))