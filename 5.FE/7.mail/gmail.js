const nodemailer = require('nodemailer');
require('dotenv').config();

// 네이버 메일 서버 설정
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PASS,
    }
});

// 이메일 내용 정의
const mailOptions = {
    from: process.env.GMAIL_ID,
    to: 'ohjmi@naver.com', // 실제 받고 싶은 수신자
    subject: '테스트 이메일',
    text: '메롱메롱 보내지냐 마냐 메롱메롱'
}

// 이메일 발송
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log('메일 전송 성공' + info.response);
    }
})

  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("이메일 전송 완료:" + info.response);
    }
  });

