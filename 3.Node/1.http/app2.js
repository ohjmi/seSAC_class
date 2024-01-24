const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1> Hello Mode! </h1>');
    res.write('<li> 메롱1 </li>');
    res.write('<li> 메롱2 </li>');
    res.write('<li> 메롱3 </li>');
    res.end('<p> Hello Server1 서버1 </p>');
}).listen(8000, () => {console.log('8000번 포트 생성 완료'); });


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1> Hello Mode! </h1>');
    res.end('<p> Hello Server2 서버2 </p>');
}).listen(8001, () => {console.log('8001번 포트 생성 완료'); });


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1> Hello Mode! </h1>');
    res.end('<p> Hello Server3 서버3 </p>');
}).listen(8002, () => {console.log('8002번 포트 생성 완료'); });
