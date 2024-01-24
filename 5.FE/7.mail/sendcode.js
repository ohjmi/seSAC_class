const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(express.json())
// -D로 오는 키 밸류에 대해 req.body에 넣어줌
app.use(express.urlencoded({ extended: true }));

// 세션 미들웨어 설정
app.use(session({
  secret: 'my-important-secret-key', // 세션 데이터를 암호화 하기 위한 키
  resave: false, // 세션 데이터가 변경되지 않아도 다시 저장할지 여부
  saveUninitialized: true, // 초기화 되지 않은 세션을 저장소에 저장할지 여부
  cookie: {
      maxAge: 60000, // 1분
  }
}));


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname,'maillogin.html'));
});

const nodemailer = require('nodemailer');
require('dotenv').config();

// 네이버 메일 서버 설정
const transporter = nodemailer.createTransport({
  host: 'smtp.naver.com',
  port: 465,
    auth: {
        user: process.env.NAVER_ID,
        pass: process.env.NAVER_PASS,
    }
});


let mailOptions;

app.post('/login/:email', (req, res) => {
  
  const userEmail = req.params.email;
  console.log(userEmail);

  let max = 9999;
  let min = 1000;

  const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;

  // 이메일 내용 정의
  mailOptions = {
    from: process.env.NAVER_ID,
    to: userEmail, // 실제 받고 싶은 수신자
    subject: '인증코드 발송',
    text: `인증코드:${randomCode}`
  }
  console.log(mailOptions);
  // 이메일 발송
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('메일 전송 성공' + info.response);
    }
  });
});


app.get('/check-login/:code', (req, res) => {
const userCode = req.params.code;
const sendCode = mailOptions.text.split(':')[1].trim();

console.log(sendCode);
    if (sendCode === userCode) {
        // 세션에 사용자 정보 저장
        req.session.userCode = userCode;
        res.json({message: '로그인 성공!'});
    } else {
        console.log('로그인 실패');
        res.status(401).json({message: '로그인 실패'});
    }
});


app.listen(port, () => {
  console.log(`서버 ${port} is ready.`)
})
