import mysql from "mysql";

const sql = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "rlagusgh1!",
  database: "practice",
});

export const userModelAccount = (req, cb) => {
  const { id, pw, name } = req.body;
  sql.query(
    `insert into user (userId, password, username) values ('${id}','${pw}','${name}')`,
    (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    }
  );
};
