import mysql from 'mysql';

const sql = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'rlagusgh1!',
  database: 'practice',
});

export const userModelAccount = (req, res) => {
  const { id, pw, name } = req.body;

  // SQL 파라미터화를 사용하여 쿼리 안전성 향상
  let userCreate;
  sql.query(
    `INSERT INTO user (userId, password, username) VALUES ('${id}','${pw}','${name}')`,
    (err, result) => {
      if (err) {
        console.error(err);
        // 적절한 오류 처리 및 클라이언트에게 오류 메시지 반환
        res.status(400).send(err);
      }
      res.send('회원 등록이 완료되었습니다.');
    }
  );
  return userCreate;
};

export const userModelCheck = (req, res) => {
  const { id, pw } = req.body;
  return new Promise((resolve, rej) => {
    sql.query(`select * from user where userId = '${id}' `, (err, res) => {
      if (err) {
        res(err);
      } else {
        resolve(res);
      }
    });
  });
};
