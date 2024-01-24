// const express = require('express');
// const cookieParser = require('cookie-parser');

// const app = express();
// const port = 3000;

// app.use(cookieParser());

// app.get('/', (req, res) => {
//     // 1초로 만료...
//     res.cookie('cookie','test', {maxAge: 60000});
//     res.send('쿠키를 전달하였습니다. 1분후에 만료됩니다.');
// });

// app.get('/user', (req, res) => {
//     const myCookie = req.cookies.myCookie;

//     console.log(req.cookies);
//     res.send(`당신이 가져온 쿠기는 이것입니다:${myCookie}`);
// });

// app.listen(port, () => {
//     console.log(`서버 이즈 러닝 ${port}`);
// })

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
    // 1분 후 만료
    res.cookie('myCookie', 'test', { maxAge: 60000 }); 
    res.cookie('username', 'user1', { maxAge: 90000 }); 
    res.cookie('cart', ['사과우유','딸기우유','바나나우유'], { maxAge: 120000 }); 
    res.send('쿠키를 전달하였습니다. 1분 후에 만료됩니다.');
});

app.get('/user', (req, res) => {
    // 'myCookie'라는 이름의 쿠키를 가져옵니다.
    const {myCookie, username, cart} = req.cookies;

    console.log(req.cookies);
    res.send(`당신${username}이 가져온 쿠키는 이것입니다: ${cart}`);
});

app.listen(port, () => {
    console.log(`서버 이즈 러닝 ${port}`);
});
