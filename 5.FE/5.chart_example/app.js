const express = require('express');
const nunjucks = require('nunjucks');
const sqlite3 = require('sqlite3');

const app = express();
const port = 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});


app.set('view engine', 'html');


app.get('/', (req, res) => {
    // 1. DB 접속
    const db = new sqlite3.Database('crm.db');
    console.log('DB 접속 성공');
    
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

            
            res.render('monthly_revenue', { labels: labels, revenues:revenues, rows:rows });
            
            db.close();
        }
    });
});

app.listen(port, () => {
    console.log('서버레디')
});