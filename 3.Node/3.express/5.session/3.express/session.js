const  express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;


// 세션 설정
app.use(session({
    secret: 'my-secret-key', // 세션 데이터를 암호화 하기 위한 키
    resave: false, // 세션 데이터가 변경되지 않아도 다시 저장할지 여부
    saveUninitialized: true // 초기화 되지 않은 세션을 저장소에 저장할지 여부
}));

// 미들웨어를 사용해서, 이 사람의 방문 횟수 트랙킹
app.use((req, res, next) => {
    // 세션에 visitCount 변수 초기회
    req.session.visitCount = req.session.visitCount || 0;

    // 방문 횟수 증가
    req.session.visitCount++;

    // 세션 정보 출력
    console.log('sessionID', req.sessionID);
    console.log('sessionInfo', req.session);
    next();
});

app.get('/', (req, res) => {
    console.log(req.session);
    res.send(`당신의 방문 횟수는 ${req.session.visitCount}입니다. 후훗`);
})

app.listen(port, () => {
    console.log('서버 레디');
});


