// 객체(오브젝트) 리터럴
let car = { make: "kia", model: "k3"};

console.log(car.make);
console.log(car.model);

console.log("make" in car);
console.log("year" in car);

function Car(make, model) {
    this.make = make;
    this.model = model;
}

let myCar = new Car("kia", "k3");
console.log(myCar);
console.log(myCar.make);
console.log(myCar.model);

let myCar1 = new Car("kia", "k3");
let myCar2 = new Car("kia", "스포티지");
let myCar3 = new Car("kia", "셀토스");
let myCar4 = new Car("kia", "테슬라");
console.log(myCar4);
console.log(myCar1.make);
console.log(myCar2.model);
