const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('mydb1.db');

// 내가 원하는 쿼리문 작성
db.run(`CREATE TABLE IF NOT EXISTS greetings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT
    )`);

// 데이터 삽입
db.run(`INSERT INTO greetings (message) VALUES (?)`,['Hello Worldddd'],
    function (err) {
        if (err) {
            console.error('데이터 삽입 실패');
            return;
        }
        console.log('데이터 성공적으로 추가:', this.lastID);
    }
);

// 데이터 조회
db.each('SELECT * FROM greetings', (err, row) => {
    if (err) {
        console.error('쿼리 실패');
        return;
    }
    console.log('Greetings:', row.message);
});

// 데이터베이스 연결 종료
db.close();
