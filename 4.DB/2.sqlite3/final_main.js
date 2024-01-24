const Database = require('./final_database2');
async function main() {

  db = new Database('mydb4.db');
  // db = new Database(':memory');

  try {
    const newUserA = { username: "yunk", email: "yunk@sesac.com" };
    const newUserB = { username: "yunk", email: "yunk@sesac.com" };
    await db.createTable();
    await db.insertUser(newUserA);
    await db.insertUser(newUserB);
    const changeUser = {
      id: 1,
      username: "yunk22",
      email: "yunk22@sesac.com",
    };
    await db.updateUser(changeUser);
    const delUser = { id: 3 };
    const delUser2 = { id: 7 };
    await db.deleteUser(delUser);
    await db.deleteUser(delUser2);

    await db.readUser();
  } catch (error) {
    console.error('에러발생:', error);
  } finally {
    db.close();
  }
}

main();
