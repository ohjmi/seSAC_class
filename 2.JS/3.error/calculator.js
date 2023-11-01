// 예외처리를 할 수있는 exception 이라는 기능이 들어가 있음
// 모던(modern) 언어들에서는 try, catch (try.. excapt)
function divide(a, b) {
    try {
        if (b === 0) {
            throw "0으로 나눌 수 없습니다."
        }
        res = a / b;
    } catch(error) {
        console.log("오류 발생", error);
    }
    
    return res;
}
console.log(divide(10,0));


// try {
//     const result = myvariable * 2;
// } catch (error) {
//     console.log("오류가 발생했습니다.")
// }

// try...catch 쓰기 좋지 않은 유형 : syntax, logic 에러
// 올바른 유형 :