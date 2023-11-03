const GenericCalc = require('./genericcalculator');
const EngineerCalc = require('./engineercalculator');
const ProgrammerCalc = require('./programmercalculator');


const generic = new GenericCalc;
const engineer = new EngineerCalc;
const programmer = new ProgrammerCalc;

// console.log(engineer.mul(30,99));
// console.log(programmer.div(20,10));
// console.log(programmer.and());
// console.log(generic.div(6,2));

// console.log('----------------------------------')

const calcArray = [generic, engineer, programmer];

function type(calcArray) {
    for (const calc of calcArray) {
        if (typeof calc.sin === 'function') {
            console.log(calc.sin());
        }
    }
    // console.log('안가지고 있어');
}
type(calcArray);



