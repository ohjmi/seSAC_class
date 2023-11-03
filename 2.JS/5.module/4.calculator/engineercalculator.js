const GenericCalc = require('./genericcalculator');

class EngineerCalc extends GenericCalc {
    
    sin() {
        return '캬캬 내가 바로 최강 사인이다!';
    }
    cos() {
        return '어허 어딜 감히!! 내가 최강 코사인이다!';
    }
    tan() {
        return '훗..ㅎ 가소로운 것들ㅋㅋㅋㅋㅋ';
    }
}

// const engineer = new EngineerCalc;
// console.log(engineer.add(1,3));
// console.log('----------------')
// console.log(engineer.sin());
// console.log(engineer.cos());
// console.log(engineer.tan());

module.exports = EngineerCalc;