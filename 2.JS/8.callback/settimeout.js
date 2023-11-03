// setTimeout(callback함수, 지연시간(ms) 1000ms = 1초

console.log('시작')
setTimeout(sayHello, 0);
console.log('함수 호출 후');

function sayHello() {
    console.log('안녕하세요, 이것은 콜백 함수입니다.');
}

console.log('종료');

//------------------------------------------
setTimeout(() => {
    console.log('비동기 코드 실행');
}, 1000);