const express = require('express');

const app = express();

const port = 3000;

function myLogger(req, res, next) {
    const date = new Date(Date.now());
    const formattedTime = date.toLocaleString();
    console.log(`${formattedTime}: LOG MASSAGE`);
    next();
}

function requestTime(req, res, next) {
    req.requestedTime = Date.now();
    next();
}

// 2. 미들웨어
app.use(myLogger);
app.use(requestTime);

// 1. 라우팅
// 루트 경로 생성 (원하는 경로를 정해서 데이터를 준다)
app.get('/', (req, res) => {
    console.log(req.requestedTime)
    res.send('Hello, World');
}); 

app.listen(port, () => {
    console.log(`서버가 ${port}에서 실행중입니다.`);
});
