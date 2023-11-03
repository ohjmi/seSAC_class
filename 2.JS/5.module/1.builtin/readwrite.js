const fs = require('fs');

// 파일 읽기
// 화살표 함수
fs.readFile('example.txt', 'utf8', (err, data) => {
    if(err) {
        console.error("파일을 읽는데 오류가 발생했습니다.",err);
        return;
    }
    console.log("파일내용", data)
});

// 일반 함수
fs.readFile('example.txt', 'utf8', readFileCallback);
function readFileCallback(err, data) {
    if(err) {
        console.error("파일을 읽는데 오류가 발생했습니다.",err);
        return;
    }
    console.log("파일내용", data)
}

// 파일 쓰기
const content = "파일에 쓰고 싶은 내용";
fs.writeFile('write.txt',content, 'utf8',(err) => {
    if(err) {
        console.error("파일을 쓰는데 오류가 발생하였습니다.",err);
        return;
    }
    console.log("파일의 결과가 성공적으로 기록되었습니다.");
});

// 파일 복사
fs.copyFile('example.txt', 'example2.txt', (err) => {
    if(err) {
        console.error("파일 복사중 오류가 발생했습니다.", err);
        return;
    }
    console.log("파일이 성공적으로 복사되었습니다.");
})