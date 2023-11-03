class GenericCalc {
    add(num1, num2) {
        return num1 + num2;
    }
    sub(num1, num2) {
        return num1 - num2;
    }
    mul(num1, num2) {
        return num1 * num2;
    }
    div(num1, num2) {
        return num1 / num2;
    }
}

// const generic = new GenericCalc;
// console.log(generic.add(2, 3));
// console.log(generic.sub(2, 3));
// console.log(generic.mul(2, 3));
// console.log(generic.div(2, 3));

module.exports = GenericCalc;