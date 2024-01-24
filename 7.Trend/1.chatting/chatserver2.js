const webSocket = require('ws');
const express = require('express');
const path = require('path')

const port = 8080;
const expressPort = 3000;

// 웹서버 소켓 생성
const wss = new webSocket.Server({ port: port});

// 익스프레스 서버 생성
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'client2.html'));
})

// 웹소켓으로 연결 대기 (즉 소켓 오픈해둔것)
wss.on('listening', () => {
    console.log(`웹소켓이 대기중임 on port ${port}`)
});

// 소켓으로 연결요청이 온 것에 대한 처리
wss.on('connection', (ws, req) => {
    const clientIp = req.socket.remoteAddress;
    console.log('클라이언트가 접속하였습니다:', clientIp);

    // 연결된 이후, 내부 메세지 처리하는 부분
    ws.on('message', (message) => {
        // 받은 메세지는 네트워크 바이트 스트림 형태다. (소켓 버퍼 타입)
        console.log(message.toString());
        let parsedMessage ='';

        // 받은 문자열을 파싱해서 객체 형태로 만듦
        try {
            parsedMessage = JSON.parse(message);
            console.log(parsedMessage);
            console.log(parsedMessage.content);
        } catch (error) {
            console.error('Invalid JSON Format:', error);
            return;
        }

        // 모든 클라이언트에게 그대로 재전송
        wss.clients.forEach((client) => {
            if (client.readyState === webSocket.OPEN) {
                const messageType = client === ws? 'sent': 'received';
                const messageObj = { type: messageType, content: parsedMessage?.content }
                client.send(JSON.stringify(messageObj));
            }
        })
    });
    // 연결된 이후, 연결종료를 처리하는 부분
    ws.on('close', () => {
        console.log('클라이언트 접속 종료');
      });
})

app.listen(expressPort, () => {
    console.log(`익스프레스 서버가 준비중, ${expressPort}`)
})

console.log('웹소켓 서버가 시작되었습니다.');