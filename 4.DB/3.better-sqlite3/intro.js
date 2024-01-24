const sqlite = require('better-sqlite3');

const db = sqlite("mydb1.db");

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT
)`);

const newUser = { username: "lilly", email: "lilly@sesac.com" };

// 데이터 삽입
const msg = ['Hello, World3'];
const insert = db.prepare(`INSERT INTO greetings (message) VALUES (?)`);
const result = insert.run(msg1);
console.log('데이터 성공적으로 추가:', result.lastInsertRowid);


// 데이터 조회
const read = db.prepare('SELECT * FROM greetings');
const greetings = read.all();
// console.log(greetings);

greetings.forEach((row) => {
    console.log('Greeting:', row.message);
});

// 데이터베이스 연결 종료
db.close();

