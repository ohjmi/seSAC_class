const express = require('express');
const sqlite3 = require('sqlite3');
const fs = require('fs');

const app = express();
const port = 3000;
const dbFile = 'mydb1.db';

const db = new sqlite3.Database(dbFile);

// DB 초기화 함수
function init_database() {
    // init_database.sql 파일을 읽어와서 실행하기
    const sql = fs.readFileSync('init_database.sql', 'utf8');
    console.log(sql);
    db.exec(sql, (err) => {
        if (err) {
            const DB_ALREADY_INITAILIZED = 19;
            if (err.errno == 19) {
                console.log('초기화 이미 되어 있음')
            } else {
                console.error('초기화 실패', err);
            }
        } else {
            console.log('초기화 성공');
        }
    });

}
init_database();

// 서버URL
app.get('/:table', (req, res) => {
    // DB로부터 특정 테이블을 조회하는 코드 작성
    const db_table = req.params.table;
    const query = `SELECT * FROM ${db_table}`;
    db.all(query, (err, rows) => {
        res.json(rows);
    })
});

app.get('/:table/:id', (req, res) => {
    const db_table = req.params.table;
    const userId = req.params.id;

    const query = `SELECT * FROM ${db_table} WHERE id=?`;

    db.get(query, [userId], (err, row) => {
        res.json(row);
    })
});

// EXPRESS 서버 시작
app.listen(port, () => {
    console.log(`서버 레디 ${port}`);
});



