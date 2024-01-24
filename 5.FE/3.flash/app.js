const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;

// nunjucks 초기화
nunjucks.configure('views', {
    express: app,
    autoescape: true
});

app.set('view engine', 'html');

// 세션을 설정
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
}));

// Flash 미들웨어 설정
app.use(flash());

app.get('/', (req, res) => {
    req.flash('info', 'welcome to my homepage'); // 메세지 담기
    res.redirect('/message');
});

app.get('/message', (req, res) => {
    // res.send(req.flash('info')); // 메세지 가져오기
    res.render('message', { messages: req.flash() });
});

app.listen(port, () => {
    console.log('서버 레디');
});
