// 이 함수는 a와 b를 입력받아 덧셈 결과를,
// 당신이 개발한 callback 함수를 통해서,
// 하나의 인자값으로 결과를 반환합니다.
// -> 당신의 원래 입력값과 결과를 총 3개의 인자값으로 결과를 반환합니다.
function add (a, b, callback) {
    const sum = a + b;
    callback(a, b, sum);
}

function displayResult(a, b, result) {
    console.log('result', a, b, result);
}
res = add(2, 3, displayResult);


// function sub (a, b) {
//     const sum = a * b;
//     console.log(sum);
// }

// function displayResult2(a, b) {
//     console.log('result2', a, b);
// }