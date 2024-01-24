const express = require('express');

const app = express();
const port = 3000;

// 정적 파일을 제공할 디렉토리는 미들웨어를 통해서 설정해준다.
app.use(express.static('public'));

// 라우팅 추가
app.get('/', (req, res) => {
    res.send('Hello, get');
});
app.get('/about', (req, res) => {
    res.send('Hello, about');
});
// 라우트 
app.get('/user', (req, res) => {
    res.send('Hello, user');
});
// 라우트 파라미터
app.get('/user/:id', (req, res) => {
    const uid = req.params.id; // 라우트 파라미터는 req.params.을 통해서 접근 가능
    res.send(`Hello, user ${uid}님`);
});
app.get('/user/:id/profile', (req, res) => {
    const uid = req.params.id; // 라우트 파라미터는 req.params.을 통해서 접근 가능
    res.send(`
    <html>
    <body>
    <h1>${uid}님의 프로파일</h1>
    <p>내 프로필...</p>
    <img src="/images/dog1.jpg">
    </body>
    </html>
    `);
});

// 미들웨어를 통한 없는 페이지 정의
app.use((req, res) => {
    res.status(404).send(`<h1>페이지를 찾을 수 없습니다.</h1>`);
});

// GET 파라미터
// search?keyword=sesac
app.get('/search', (req, res) => {
    const keyword = req.query.keyword; // GET 파라미터는 req.query를 통해서 전달받음
    res.send(`입력한 키워드는: ${keyword}입니다.`);
});

// shopping?category=drink&item=beer
app.get('/shopping', (req, res) => {
    const dog = req.query.category; // GET 파라미터는 req.query를 통해서 전달받음
    const item = req.query.item;
    res.send(`입력한 키워드는: ${dog}에 ${item}입니다.`);
});

// POST 파라미터 xxx ==> BODY 파싱


// 서버 생성
app.listen(port, () => {
    console.log(`서버가 ${port}에서 실행중입니다.`);
});


