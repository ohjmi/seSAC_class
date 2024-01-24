const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();
const port = 3000;


const dbFile = 'crm.db';

// SQLite 데이터베이스 연결
const db = new sqlite3.Database(dbFile);
// Body 안에 있는 json 형식을 찾아 파싱해 req.body에 넣어줌
app.use(express.json())
// -D로 오는 키 밸류에 대해 req.body에 넣어줌
app.use(express.urlencoded({ extended: true }));


// 라우터 추가
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'monthly_revenue2.html'));
});

app.get('/api/chart-data', (req, res) => {
    // 2. DB 쿼리문
    db.all(`SELECT
            strftime('%Y-%m', o.OrderAt) AS YearMonth,
            SUM(i.UnitPrice) AS MonthlyRevenue
            FROM users u JOIN orders o JOIN items i JOIN orderitems oi 
            ON u.Id = o.UserId AND o.Id = oi.OrderId AND oi.ItemId = i.Id
            WHERE o.OrderAt >= date('now', '-1 year')
            GROUP BY strftime('%Y-%m', o.OrderAt) 
            ORDER BY strftime('%Y-%m', o.OrderAt)
    `, (err, rows) => {
        if (err) {
            // 에러 처리: 에러 응답 보내거나 로깅
            console.error(err);
            res.status(500).send('내부 서버 오류');
        } else {
            console.log(rows);
            const labels = JSON.stringify(rows.map((row) => row.YearMonth));
            const revenues = JSON.stringify(rows.map((row) => row.MonthlyRevenue));
            console.log(labels, revenues);


            res.json({
                // rows: rows,
                labels: labels,
                revenues: revenues,
            })
        }
    });
});

app.listen(port, () => {
    console.log('서버레디')
});