const Employee = require('./Person');
class Manager extends Employee {
    constructor(name, age, gender, jobTitle, salary, jobTeam) {
        super(name, age, gender, jobTitle, salary);
        this.jobTeam = jobTeam;
    }
    assignTasks() {
        console.log(`${this.name} ${this.jobTitle}이 ${this.jobTeam}에 업무를 분배하고 있습니다.`);
    }
}

module.exports = Manager;