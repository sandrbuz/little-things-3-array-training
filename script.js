
//  четные числа по порядку возрастания
// array = [];
// for (i = 0; i < 50; i++) {
//     if (i % 2 === 0) {
//         array.push(i);
//     }
// }


//  нечетные числа по порядку возрастания

// array1 = [];

// for (i = 1; i < 50; i++) {
//     if (i % 2 !== 0) {
//         array1.push(i)
//     }
// }
// убывающий массив из чисел которые делятся на 3

// array2 = [];
// for (i = 50; i > 1; i--) {
//     if (i % 3 === 0) {
//         array2.push(i)
//     }
// }
//  массив каждый  элемент которого равен квадрату своего индекса

// array3 = [];
// for (i = 0; i < 50; i++) {
//     if (array3[i] = i * i) {
//         array3.push(i)
//     }
// }
// console.log(array3);


// ряд чисел в диапазоне с шагом 5

// array4 = [];
// for (i = 20; i <= 50; i = i + 5) {
//     array4.push(i)
// }
// console.log(array4);

// значения функции при разных значениях переменных

var x;
var y;

var arr1 = [];
var arr2 = [];

function Val(max, min, step) {
    for (var x = min; x <= max; x += step) {
        y = -0.23 * Math.pow(x, 2) + x;
        arr1.push(x);
        arr2.push(y);
    };
    return arr1, arr2;


}

var b = Val(3, 1, 0.5);
console.log(arr1);
console.log(arr2);
