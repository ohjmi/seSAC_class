const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("mydb3.db");

// 테이블 생성
db.run(
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT
)`,
  (err) => {
    if (err) {
      console.err("생성 실패", err);
      return;
    }

    // 생성 성공하면
    // 삽입
    const newUser = { username: "yunk", email: "yunk@sesac.com" };

    db.run(
      "INSERT INTO users (username, email) VALUES (?, ?)",
      [newUser.username, newUser.email],
      function (err) {
        if (err) {
          console.error("데이터 삽입 실패");
          return;
        }
        // 삽입 성공하면
        console.log("데이터 삽입 성공:", this.lastID);

        // 데이터 수정 (UPDATE) => UPDATE
        const updateUser = {
          id: 1,
          username: "yunk22",
          email: "yunk22@sesac.com",
        };

        db.run(
          "UPDATE users SET username=?, email=? WHERE id=?",
          [updateUser.id, updateUser.username, updateUser.email],
          (err) => {
            if (err) {
              console.error("수정 실패", err);
              return;
            }
            console.log("수정 성공");
          }
        );

        // 조회
        db.each("SELECT * FROM users", (err, row) => {
          if (err) {
            console.error("쿼리 실패");
          }
          console.log("All Users: ", row);
        });

        // 데이터 삭제 (DELETE) => DELETE
        const delUser = {
          id: 3,
        };

        db.run("DELETE FROM users WHERE id=?", [delUser.id], (err) => {
          if (err) {
            console.log("삭제 실패", err);
            return;
          }
          console.log("삭제 성공");
        });

        // 데이터베이스 연결 종료
        db.close();
      }
    );
  }
);
