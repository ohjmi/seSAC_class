const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

const secretKey = 'mySecret'; // 전자서명을 위한 나의 개인키

app.use(cookieParser());

app.use((req, res, next) => {
    const token = req.cookies.jwt;

    // JWT 검증
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        //원하는 내용 추출
        const clientId = decoded.clientId;
        if (clientId === "MyClientId-1234") {
            console.log('유저 페이지 전달')
            next();
        } else if (clientId === "MyClientId-admin") {
            console.log('관리자 페이지 전달')
            next();
        } else {
            res.status(403).json({ message: "Forbidden" })
        }
    });
});

app.use((req, res, next) => {
    const token = req.cookies.jwt
})

app.get('/decode', (req, res) => {
    const token = req.cookies.jwt;

    console.log(token);

    const decodedToken = jwt.decode(token, { complete: true });
    if (!decodedToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    };
});

app.get('/', (req, res) => {
    console.log('루트 접속');
    res.send('hello');
});

app.listen(port, () => {
    console.log(`서버 이즈 러닝 ${port}`);
});