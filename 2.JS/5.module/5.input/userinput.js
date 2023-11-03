const readline = require('readline'); // old방식
// import readline () from 'readline' 

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question('구구단의 단을 입력하세요', (input) => {
    const num = parseInt(input);

    if (!isNaN(num) && num > 0 && num < 10) {
        // 이 단의 구구단을 출력하시오. 3줄 이내로 작성
        for(let i = 0; i <= 9; i++) {
            console.log(`${num} * ${i} = ${num * i}`);
        }
    } else {
        console.log('숫자를 입력하세요!!');
    }
    r1.close();
});

const uuid2 = uuid.v4();
console.log(uuid2);