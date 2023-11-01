// const today = Date();
// console.log(today);

// 1. Date
const today = new Date(); // 객체라는 속성으로 정보가 담겨있음
console.log(today);

// 2. Math
const Maxnumber = Math.max(10, 20, 30, 5, 3, 1);
console.log(Maxnumber);

const numbers = [-10, -20, -30, -5, -3, -1];
// 미션1. 이 numbers 배열에서 가장 큰 숫자를 찾는 로직을 구현하시오.
// for, if 두 개의 문법을 사용해서...
// 1. 앞에서부터 맨 뒤까지 하나하나 숫자를 읽는다.
// 2. 그 숫자가 내가 알고 있는 가장 큰 숫자보다 큰 숫자인지를 확인(비교)한다.
// 3. 그래서, 이 숫자가 작으면, 그냥 무시.. 이게 더 크면, 내 손에 기억하는
// let maxs = numbers[0]
let max = 0;

function max_numbers(nums) {
    for( let i = 0; i < nums.length; i++) {
        // console.log(nums[i]);
        if (nums[i] > max) {
            max = nums[i];
            // console.log(nums);
        }
    }
    return max;
}
max_num = max_numbers(numbers);
console.log(max_num);

// 3. String
const text = 'Hello world';
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());