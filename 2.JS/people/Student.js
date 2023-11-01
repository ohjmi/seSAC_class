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

module.exports = Student;
