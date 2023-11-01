var result = 10; // global scope

function add(a, b) {
    let result2 = a + b; // block scope  // 쉐도잉
    // result = 10;
    console.log("1result",result2);
    // console.log("res", res);
    return result2;
}

console.log("2result",result);
result = add(2, 5);

// console.log("res", res); // undefined var 오류 발생

console.log("3result",result);