const Person = require('./Person');
class Employee extends Person {
    constructor(name, age, gender, jobTitle, salary) {
        super(name, age, gender);
        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    displayInfo() {
        console.log(`직원 ${this.name}의 직위는 ${this.jobTitle}이며, 급여는 ${this.salary}원 입니다.`);
    }
    work() {
        console.log(`${this.name}이(가) 업무 중입니다.`);
    }
    greet() {
        console.log(`안녕세요, 저는 ${this.name}이고, 직위는 ${this.jobTitle}입니다.`) //문제
    }
}

module.exports = Employee;