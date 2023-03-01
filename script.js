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
