const nodemailer = require('nodemailer');
require('dotenv').config();

// 네이버 메일 서버 설정
const transporter = nodemailer.createTransport({
    host: 'smtp.naver.com',
    port: 465,
    auth: {
        user: 'ohjmi@naver.com',
        pass: 'LDQU2BW1C9H2'
    }
});

// 이메일 내용 정의
const mailOptions = {
    from: 'ohjmi@naver.com',
    to: 'ohjmi@naver.com',
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