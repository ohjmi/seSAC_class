class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet() {
        console.log(`안녕, 나는 ${this.name}이고, ${this.age}살이야.`)
    }
    walk() {
        console.log(`${this.name}이(가) 걷고 있습니다.`)
    }
    eat() {
        console.log(`${this.name}이(가) 식사 중입니다.`)
    }
}

const Person1 = new Person("철수", 25, "남성"); // 생성
    Person1.greet();
    Person1.walk();
    Person1.eat();


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
// Employee 생성
const employee = new Employee("영희", 30, "여성", "매니저", 50000);
employee.greet();
employee.displayInfo();
employee.walk();
employee.work();


class Manager extends Employee {
    constructor(name, age, gender, jobTitle, salary, jobTeam) {
        super(name, age, gender, jobTitle, salary);
        this.jobTeam = jobTeam;
    }
    assignTasks() {
        console.log(`${this.name} ${this.jobTitle}이 ${this.jobTeam}에 업무를 분배하고 있습니다.`);
    }
}

class Student extends Manager {
    constructor(name, age, gender, date, major) {
        super(name, age, gender);
        this.date = date;
        this.major = major;
    }
    study() {
        console.log(`${this.name} 학생이 ${this.major}을 공부하고 있습니다.`);
    }
}

class Customer extends Student {
    constructor(name, age, gender, product, myOrders) {
        super(name, age, gender);
        this.product = product;
        this.order1 = myOrders[0];
        this.order2 = myOrders[1] ;
    }
    placeOrder() {
        console.log(`${this.name} 고객이 ${this.order1}을 완료했습니다.`);
    }
}






// "아래 내용이 나오도록, Class 들 구현하기...

// Manager 객체 생성 및 활용
const manager1 = new Manager("영민", 35, "남성", "팀장", 60000, "개발팀");
console.log(manager1);
manager1.assignTasks(); // "영민 매니저가 팀에 업무를 배분하고 있습니다." 출력

// Student 객체 생성 및 활용
const student1 = new Student("지연", 20, "여성", "2023001", "컴퓨터 공학");
student1.study(); // "지연 학생이 컴퓨터 공학을 공부하고 있습니다." 출력

// Customer 객체 생성 및 활용
const customer1 = new Customer("태식", 30, "남성", "C1001", ["주문1", "주문2"]);
customer1.placeOrder(); // "태식 고객이 주문을 완료했습니다." 출력


const student2 = new Student("철수", "컴퓨터 공학");
// console.log(employee2.greet());
const people = [manager1, student1, customer1, student2];
console.log('-----------');

function introduce(people) {
    for(const person of people) {
        person.greet();
    }
}
introduce(people);