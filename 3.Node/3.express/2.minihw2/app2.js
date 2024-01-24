const express = require('express');
const nunjucks = require('nunjucks');
const fs = require('fs');
// const csv = require('csv-parser'); //선택사항
const csv = require('fast-csv'); // 선택사항

const app = express();
const port = 3000;

// 눈적스 초기화
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'html');

// 성능 측정 미들웨어
app.use((req, res, next) => {
    const start = Date.now();

    // 나중에 동작할 리스너(listener)를 등록
    res.on('finish', () => {
        const end = Date.now();
        const duration = end - start;

        console.log(`요청 ${req.path}에서 응답까지는 ${duration}ms 소요됩니다.`);
    });
    next();
});

// 데이터를 담을 배열
const data = [];
const fieldnames = [];


app.get('/', (req, res) => {
    // 파일 읽기 코드
    fs.createReadStream('./userData.csv', { encoding: 'utf8' })
        .pipe(csv.parse( {headers: true, trim: true})) // 미션2. csv-parser들에 이런 기능은 없나?
        .on('headers', (headers) => {
            fieldnames.push(...headers);
            console.log(fieldnames);
        })
        .on('data', (row) => {
            // 미션3. 공백이 들어간 것을 삭제하는 코드를 여기서 구현한다.
            data.push(row);
        })
        .on('end', () => {
            console.log('파일 다 읽었음');
            res.render('index2', { data: data, headers: fieldnames });
        })
        .on('error', (error) => {
            console.log('파일 읽기 오류', error);
        })
        
});


app.listen(port, () => {
    console.log(`서버에 ${port} 가 열려있습니다.`);
});