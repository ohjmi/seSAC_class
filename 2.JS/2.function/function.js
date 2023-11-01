// 함수 정의 / 선언(declear)
function greet() {
    console.log("안녕하세요!");
    console.log("오류");
}

// 함수 호출 = 실행
greet();

// 매개변수(Parameter)
function greetByName(name) {
    // console.log("안녕하세요,", name);
    console.log(`안녕하세요, ${name}님`);
} 
greetByName("오정미");
greetByName("오00");
greetByName("오0어");

function add(a, b) {
    // console.log((a, b));
    let sum = a + b;
    // console.log(sum);

    return sum;
}

// add(2,3);
let sum = add(2,5); // 함수를 호출하면서 인수(argument)를 두 개 받는 상황
console.log(sum);


// 익명함수
// function 함수명(파라1, 파라2, 파라3 ...)
let result2 = function(x, y) { return x * y};
console.log(result2(2,5));

let resul3 = function(x, y) {
    return x * y
};
console.log(resul3(10,9));

// 화살표 함수(Arrow Funciton) (function 키워드도 없이, 더 간소화...)
let resul4 = (x, y) => {return x * y};
console.log(resul4(3,5));

// 미션
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}

function div(a, b) {
    if(b === 0) {
        console.log("0으로 나눌 수 없습니다.");
    } else {
    return a / b;
    }
}

console.log(add(20,30));
console.log(sub(20,30));
console.log(mul(90,90));
console.log(div(1,0));