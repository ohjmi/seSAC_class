function divide(a, b) {
    try {
        if (typeof b !== 'number') {
            throw new TypeError("숫자를 입력하세요");
        }
        // 길이 제한하는 코드를 추가하려면??
        // a_str = a.toString();
        // a_str_length = a_str.length;
        // console.log(a_str_length);
        if (a.toString().length > 9) {
            throw new RangeError("길이가 9글자 이상인 경우 지원되지 않습니다.")
        }
        if (b === 0) {
            throw new Error("0으로 나눌 수 없습니다.");
        }
        return a / b;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("타입 오류가 발생했습니다.", error.message);
        } else {
            console.error("기타 오류가 발생했습니다.", error.message);
        }
    }
}
console.log(divide(10,2));
console.log(divide(10,"문자열"));
console.log(divide(1000000000,1));