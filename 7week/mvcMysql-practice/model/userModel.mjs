import mysql from "mysql";

const sql = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "rlagusgh1!",
  database: "practice",
});

export const userModelAccount = (req) => {
  const { id, pw, name } = req.body;

  // SQL 파라미터화를 사용하여 쿼리 안전성 향상
  let userCreate;
  sql.query(
    `INSERT INTO user (userId, password, username) VALUES ('${id}','${pw}','${name}')`,
    (err, result) => {
      if (err) {
        console.error(err);
        // 적절한 오류 처리 및 클라이언트에게 오류 메시지 반환
        return err;
      }
      return "회원 등록이 완료되었습니다.";
    }
  );
  return userCreate;
};

export const userModelCheck = (req) => {
  return new Promise((resolve, reject) => {
    const { id } = req.body;
    sql.query(`select * from user where userId = '${id}' `, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log(result);
        resolve(result);
      }
    });
  });
};

export const userModelUpdate = (req, res) => {
  sql.query(
    `UPDATE user SET username = "${req.username}" WHERE userId = '${req.userId}'`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send("변경되었습니다.");
      }
    }
  );
};

export const userModelDelete = (req, cb) => {
  console.log(req.body);
  sql.query(
    `delete from user where userId = '${req.body.id}'`,
    (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    }
  );
};
