// for (시작값; 종료조건; 시작값의증감조건) {

// }

for(i = 0; i < 5; i++) {
    console.log("i=" + i);
    for(j = 0; j < 5; j++) {
        console.log("j=" + j);
        for(k = 0; k < 5; k++) {
            console.log("k=" + k);
        }
    }
}
// 미션1. 구구단을 출력하시오.
// 1x1 =1
// 1x2 =2
for(let i = 1; i < 10; i++) {
    console.log(i+"단");
    for(let j = 1; j < 10; j++) {
        let gugudan = i * j;
        console.log(i + "X" + j+ "=" + gugudan);
    }
}
let n = 0;
while (n < 10) { // 조건이 true일 때만 동작
    n = n + 1;
    console.log(n);
}

n = 0;
while(true) {
    if(n == 10) {
        n = n + 1;
        continue;
    }else if (n == 20) {
        break;
    }
    console.log(n);
    n = n + 1;
}

// do {

// } while ()
n = 0;
do {
    console.log(n)
    n = n + 1;
} while (n < 3);