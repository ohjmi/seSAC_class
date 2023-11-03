const os = require('os');

const hostname = os.hostname();
console.log(hostname);

const cpus = os.cpus();
console.log(cpus);

console.log('-------------------');
console.log(cpus[0]);
console.log(cpus[0].model);

for (let i = 0; i < cpus.length; i++) {
    console.log(cpus[i].model);
}
console.log('-------------------');
for (const cpu of cpus) {
    console.log(cpu.model);
}

const totalMemory = os.totalmem(); // Byte -> KB -> KB -> GB
console.log("전체 메모리", totalMemory);
console.log("전체 메모리", totalMemory / 1024 / 1024 / 1024, 'GB');

// 여기에서 소수점을 제거하는 방법은?? 힌트: Math 함수
console.log("전체 메모리", Math.ceil(totalMemory / 1024 / 1024 / 1024,),'GB');