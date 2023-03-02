// task 1

// function divide(num) {
//     let counter = 0;
//     for (; num >= 10; ++counter) {
//         num /= 2;
//     }
//     return counter;
// }
//
// console.log(divide(80));

// task 2

// function divide(num) {
//     let counter = 0;
//     while (num >= 10) {
//         num /= 2;
//         ++counter;
//     }
//     return counter;
// }

// task 3

// function func(num1, num2) {
//     if (num1 > 0 && num2 > 0) {
//         return num1 * num2;
//     } else {
//         return num1 - num2;
//     }
// }
//
// console.log(func(3, 4));

// task 4

// function isEven(arr) {
//     for (let elem of arr) {
//         if (elem % 2 !== 0) return false;
//     }
//     return true;
// }
//
// console.log(isEven([2, 4, 6, 8]));

// task 5
// function checkNum(num) {
//     let arr = String(num).split('');
//     for (let elem of arr) {
//         if (Number(elem) % 2 !== 0) return true;
//     }
//     return false;
// }
//
// console.log(checkNum(157937));

// task 6
// function checkArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i+1]) return true;
//     }
//     return false;
// }
//
// console.log(checkArr([1, 2, 2, 3, 3, 5, 6, 6]));

// task 7

// function func(a, b) {
//     return a == b;
// }
//
// console.log(func(9, 6));

// task 8

// function func(a, b) {
//     return a != b;
// }
//
// console.log(func(5, 8));

// task 9

// function func(a, b) {
//     return a + b >= 10;
// }
//
// console.log(func(6, 3));

// task 10

// function func(num) {
//     return num >= 0;
// }

// task 11
//
// function findMean(arr) {
//     let res = 0;
//     for (let elem of arr) {
//         res += elem;
//     }
//     return res / arr.length;
// }

// task 12

// function divideSumOfArr(arr1, arr2) {
//     let res1 = 0;
//
//     for (let elem of arr1) {
//         res1 += elem;
//     }
//
//     let res2 = 0;
//
//     for (let elem of arr2) {
//         res2 += elem;
//     }
//
//     return res1 / res2;
// }

// task 13

// function getProd(arr) {
//     let res = 1;
//     for (let elem of arr) {
//         res *= elem;
//     }
//     return res;
// }

// task 14
// function getSum(arr) {
//     let sum = 0;
//     arr.forEach((elem) => sum+=elem);
//     return sum;
// }
//
// console.log(getSum([1, 2, 3, 4, 5]));

// task 15
// function getDividers(num) {
//     let res = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) res.push(i);
//     }
//     return res;
// }
//
// console.log(getDividers(24));

// task 16
// function getLetters(str) {
//     return str.split('');
// }
//
// console.log(getLetters('str'));

// task 17
// function reverseStr(str) {
//    return str.split('').reverse().join('');
// }
//
// console.log(reverseStr('str'));

// task 18
// function setCapitalLetter(str) {
//     return str.slice(0, 1).toUpperCase() + str.slice(1);
// }
//
// console.log(setCapitalLetter('str'));

// task 19
// function setCapitals(str) {
//     let newArr = [];
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].slice(0,1).toUpperCase() + arr[i].slice(1));
//     }
//     return newArr.join(' ');
// }
//
// console.log(setCapitals('You are fool'));

// task 20
// function fillArr(num) {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
//
// console.log(fillArr(12));

// task 21

// function getRandom(arr) {
//     return arr[Math.floor(Math.random() * arr.length)]
// }

// task 22
// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
//
// console.log(isPrime(4));

// task 23

// function checkNums(num1, num2) {
//     let res1 = [];
//     let res2 = [];
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 1; i <= num1; i++) {
//         if (num1 % i === 0) res1.push(i);
//     }
//     for (let j = 1; j <= num2; j++) {
//         if (num2 % j === 0) res2.push(j);
//     }
//     res1.forEach((elem) => sum1 += elem);
//     res2.forEach((elem) => sum2 += elem);
//     if (sum1 === num2 && sum2 === num1) {
//         return 'Дружественные числа';
//     } else {
//         return 'Недружественные числа';
//     }
// }
//
// console.log(checkNums(220, 284));

// function isFrendly (num1, num2){
//     return getSumDivisors(num1) === num2 && getSumDivisors(num2) === num1;
// }
//
// function getDivisors(num){
//     let divisorsNum = [];
//     for (let i = 1; i < num; i++ ){
//         if (num % i === 0){
//             divisorsNum.push(i);
//         }
//     }
//     return divisorsNum;
// }
//
// function getSum(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
//
// function getSumDivisors (num) {
//     return getSum(getDivisors(num));
// }
//
// console.log(isFrendly(220, 284));

// task 24

// function isFriendly(num1, num2){
//     return getSumDivisors(num1) === num2 && getSumDivisors(num2) === num1;
// }
//
// function getDivisors(num){
//     let divisorsNum = [];
//     for (let i = 1; i < num; i++ ){
//         if (num % i === 0){
//             divisorsNum.push(i);
//         }
//     }
//     return divisorsNum;
// }
//
// function getSum(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
//
// function getSumDivisors (num) {
//     return getSum(getDivisors(num));
// }
//
// function getFriendlyPairs(from, to) {
//     let arr = [];
//     for (let i = from; i < to; i++) {
//         for (let j = i + 1; j < to; j++) {
//             if (isFriendly(i, j)) {
//                 arr.push([i, j]);
//             }
//         }
//     }
//     return arr;
// }
//
// console.log(getFriendlyPairs(1, 1000));

// task 25
// function isPerfect(num) {
//     let dividers = [];
//     let sum = 0;
//
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) dividers.push(i);
//     }
//     dividers.forEach((elem) => sum += elem);
//
//     if (sum === num) return 'The number is perfect';
//     return 'The number is not perfect';
// }
//
// console.log(isPerfect(6));

// task 26
// function getLucky(arr) {
//     let lucky = [];
//     arr.forEach(function (elem) {
//         const str = String(elem);
//         const sumStart = +str[0] + +str[1] + +str[2];
//         const sumEnd = +str[3] + +str[4] + +str[5];
//         if (sumStart === sumEnd) lucky.push(elem);
//     });
//     return lucky;
// }

// task 27
// function getCommonDividers(num1, num2) {
//     let res = [];
//     let dividers1 = [];
//     let dividers2 = [];
//
//     for (let i = 1; i < num1; i++) {
//         if (num1 % i === 0) dividers1.push(i);
//     }
//
//     for (let j = 1; j < num2; j++) {
//         if (num2 % j === 0) dividers2.push(j);
//     }
//
//     for (let k = 0; k < dividers1.length || k < dividers2.length; k++) {
//         if (dividers1[k] === dividers2[k]) res.push(dividers1[k]);
//     }
//     return res;
// }
//
// task 28
// function translit(word){
//
//     let answer = '';
//
//     const converter = {
//
//         'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
//
//         'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
//
//         'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
//
//         'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
//
//         'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
//
//         'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
//
//         'э': 'e',    'ю': 'yu',   'я': 'ya',
//
//
//
//         'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
//
//         'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
//
//         'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
//
//         'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
//
//         'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
//
//         'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
//
//         'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
//
//     };
//
//
//
//     for (let i = 0; i < word.length; ++i ) {
//
//         if (converter[word[i]] === undefined){
//
//             answer += word[i];
//
//         } else {
//
//             answer += converter[word[i]];
//
//         }
//
//     }
//
//     return answer;
// }
//
// console.log(translit('отстань'));

// task 29

// let arr = [
//     function() {return 1},
//     function() {return 2},
//     function() {return 3},
// ];
//
// for (let func of arr) {
//     console.log(func());
// }

// task 30

// let obj = {
//     func1: function() {return 1},
//     func2: function() {return 2},
//     func3: function() {return 3},
// };
//
// let sum = obj.func1() + obj.func2() + obj.func3();
//
// for (let fun in obj) {
//     console.log(obj[fun]());
// }
//
// console.log(sum);

// task 31

// let math = {
//     sum: function(arr) {
//         let s = 0;
//         arr.forEach((elem) => s += elem);
//         return s;
//     },
//     sumSquare: function(arr) {
//         let s = 0;
//         arr.forEach((elem) => s += (elem ** 2));
//         return s;
//     },
//     sumCube: function(arr) {
//         let s = 0;
//         arr.forEach((elem) => s += (elem ** 3));
//         return s;
//     },
// };
//
// console.log(math.sum([1, 2, 3]));
// console.log(math.sumSquare([1, 2, 3]));
// console.log(math.sumCube([1, 2, 3]));

// task 32

// function test(f1, f2, f3) {
//     console.log(f1() + f2() + f3());
// }
//
// test(
//     function() {return 1;},
//     function() {return 2;},
//     function() {return 3;},
// )

// task 33
// function test(f1, f2, f3) {
//     return f1() + f2() + f3();
// }
//
// let func1 = function() {
//     return 1;
// };
//
// let func2 = function() {
//     return 2;
// };
//
// let func3 = function() {
//     return 3;
// };
//
// console.log(test(func1, func2, func3));

// task 34

// function test(func) {
//     console.log(func(2, 3));
// }
//
// let func = function(num1, num2) {
//     return num1 + num2;
// }
//
// test(func);

// task 35

// function test(num, func1, func2) {
//     return func1(num) + func2(num);
// }
//
// console.log(test(3, function (num) {
//     return num ** 2;
// }, function (num) {
//     return num ** 3;
// }));

// task 36

// function test(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = func(arr[i]);
//     }
//     return arr;
// }
//
// console.log(test([2, 4, 8, 6], function (num) {
//     return num ** 3;
// }));

// task 37

// function func(num1, num2) {
//     function square(num) {
//         return num ** 2;
//     }
//     function cube(num) {
//         return num ** 3;
//     }
//     return square(num1) + cube(num2);
// }
//
// console.log(func(1, 2));

// task 38

// function func() {
//     return function() {
//         return function() {
//             return function() {
//                 return function() {
//                     return '!';
//                 }
//             }
//         }
//     }
// }
//
// console.log(func()()()()());

// task 39

// function func(num1){
//     return function(num2) {
//         return function(num3){
//             return num1 + num2 + num3;
//         }
//     }
// }
//
// console.log(func(2)(3)(4));

// task 40
// function func(num1) {
//     return function (num2) {
//         return function (num3) {
//             return function (num4) {
//                 return function () {
//                     let arr = [];
//                     arr.push(num1, num2, num3, num4);
//                     return arr;
//                 }
//             }
//         }
//     }
// }
//
// console.log(func(2)(3)(4)(5)());

// task 41
