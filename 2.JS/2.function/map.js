const numbers = [1, 2, 3, 4, 5];

// 화살표 함수 (arrow function)
// const sqrNumbers = numbers.map((num) => num * num);

// console.log(numbers);
// console.log(sqrNumbers);

const sqrNumbers = square(numbers);
function square(num) {
    return num * num
}
console.log(numbers);
console.log(sqrNumbers);