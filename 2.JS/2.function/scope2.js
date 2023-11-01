// function calcSum(n) {
//     let sum = 0;
//     for(let i = 1; i < n + 1; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }
// calcSum(10);

// function calcSum(n) {
//     let sum = 0;
//     for(let i = 1; i < n + 1; i++){
//         sum += i;
//         sum = 100;
//     }
// }
// calcSum(10);
// console.log(sum);

// var x = 10;

// function displayNumber() {
//     console.log('x is' + x);
//     console.log('y is' + y);
//     let y = 20;
// }
// displayNumber();

if (true) {
    let blockScoped = 'I am block scoped';
    var functionScoped = 'I am function scoped';
}

console.log(functionScoped); // 출력: 'I am function scoped'
console.log(blockScoped); // ReferenceError: blockScoped is not defined
