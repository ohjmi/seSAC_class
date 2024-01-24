
// function log(message) {
//     console.log(message);
// }
// log('hello');
 
// 조건이 맞지 않을 경우, 값이 undefiend 경우, 값이 -1인 경우
// 빨리 return하고 필요한 로직은 뒤에 작성하는 것이 좋은
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //  logn upgrade logic 
}

const print = function () {
    console.log('print') // anonymous function(익명함수)
}
print(); // 선언한 변수로 함수 호출하듯이 사용

const printAgain = print;
printAgain();

function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
  }
  const printYes = function () {
    console.log('yes!');
  }

  const printNo = function () {
    console.log('no!');
  }
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);

   const simple = function() {
    console.log('simplePrint');
   }

   const simple2 =  () => console.log('simplePrint');
   
   const add = (a, b) => {
        return a * b;
   }