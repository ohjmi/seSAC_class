const express = require('express');
const expressWs = require('express-ws');
const WebSocket = require('ws');
const path = require('path');

const port = 3000;

const app = express();
expressWs(app);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client3.html'));
});

// 접속자 정보를 저장하기 위한 자료구조
const wsClients = new Map();

// 웹소켓 핸들링 코드
app.ws('/chat', (ws, req) => {

    // 소켓으로 연결요청이 온 것에 대한 처리
    const clientIp = req.socket.remoteAddress;
    console.log('클라이언트가 접속하였습니다:', clientIp);

    // 연결된 이후, 내부 메세지 처리하는 부분
    ws.on('message', (message) => {
        // 받은 메세지는 네트워크 바이트 스트림 형태다. (소켓 버퍼 타입)
        console.log(message.toString());
        let parsedMessage =''; 
        let messageType;
        let username;

        // 받은 문자열을 파싱해서 객체 형태로 만듦
        try {
            parsedMessage = JSON.parse(message);
            messageType = parsedMessage.type;
            username = parsedMessage.username;

            console.log(parsedMessage);
            // console.log(clientIp,parsedMessage.content);
        } catch (error) {
            console.error('Invalid JSON Format:', error);
            return;
        }


        // 세션 ID (유저네임)을 한번도 저장한적이 없으면?? 저장하기
        if (username && !wsClients.has(username)) {
            wsClients.set(username, ws);
        }

        console.log(`메세지 받음 from ${username}, ${parsedMessage.content}`);
        // 모든 클라이언트에게 그대로 재전송
        if (messageType !== 'session') {

            wsClients.forEach((client) => {
                // 사용자 접속했는지 확인하는 구문
                if (client.readyState === WebSocket.OPEN) {
                    const messageType = client === ws? 'sent': 'received';
                    const messageObj = { type: messageType, sender: username, content: parsedMessage?.content }
                    client.send(JSON.stringify(messageObj));
                }
            })
        }
    });


    // 연결된 이후, 연결종료를 처리하는 부분
    ws.on('close', () => {
        console.log('클라이언트 접속 종료');
      });

});

app.listen(port, () => {
    console.log(`익스프레스 서버 및 웹소켓 레디 on ${port}`);
})