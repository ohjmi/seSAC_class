hello = "hello";

var hello = "hello";

let number = 1;
let number2 = 'hello';
let number3 = 3;
number3 = 'hello';

// 객체(object) - 중괄호로 키밸류 형태로 감싼 테이터 유형
let person3 = {name: "Alice",age:30,job:"Engineer"}; // 적절한 스페이싱을 통해
let person = { name: "Alice", age: 30, job: "Engineer" };

let person2 = {
    name : "Alice",
    age : 30,
    job : "Engineer"
};

console.log(person2);

// 2. 객체 접근
console.log(person2.name);
console.log(person2.age);
console.log(person2.job);

// 3. 속성 추가
person2.location = "Seoul";
console.log(person2);

// 4 속성 변경
person2.age = 31;
console.log(person2);

// 5. 속성 삭제
delete person2.location;
console.log(person2);

// 6. 객체 함수도 추가 가능함 초급에서는 몰라도 되고, 중급에서는 매우 매우 많이 사용됨
let car = {
    brand : "Kia",
    year : 2020,
    start: function() {
        return "Engine Started"
    },
    stop: function() {
        return "Engine Stopped"
    }
};

console.log(car);
console.log(car.start());
console.log(car.stop());