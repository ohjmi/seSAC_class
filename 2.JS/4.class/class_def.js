// class declaration = 객체 선언(정의)
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    drive() {
        return `${this.make} ${this.model} ${this.year} 이 운행중입니다.`
    }
    stop() {
        return `${this.make} ${this.model} ${this.year} 차가 멈췄습니다.`
    }
}

const myCar = new Car('Kia', 'K3', '2002');
const yourCar = new Car('Tesla','Model3','1991');

console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);
console.log(myCar.drive());
console.log(myCar.stop());
console.log(yourCar.make);
console.log(yourCar.model);
console.log(yourCar.year);
console.log(yourCar.drive());
console.log(yourCar.stop());