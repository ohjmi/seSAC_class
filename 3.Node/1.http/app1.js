const http = require('http');

const sever = http.createServer((req, res) => {
    // 헤더
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    // 본문(body)
    res.write('<h1>나의 첫번째 WAS 서버</h1>');
    res.end('<p>안녕하세요</p>');
});

sever.listen(3000, () => {
    console.log('서버가 3000번 포트에 잘 열려있습니다. 서버가 준비되었습니다.');
})