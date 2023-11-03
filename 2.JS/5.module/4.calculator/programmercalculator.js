const GenericCalc = require('./genericcalculator');

class ProgrammerCalc extends GenericCalc {

    and() {
        return 'and 연산자지롱';
    }
    or() {
        return 'or 연산자지롱';
    }
    xor() {
        return 'xor 연산자지롱';
    }
}

// const programmer = new ProgrammerCalc;
// console.log(programmer.add(2,4))
// console.log(programmer.and());
// console.log(programmer.or());
// console.log(programmer.xor());

module.exports = ProgrammerCalc;